-- Run this in Supabase Dashboard → SQL Editor

-- Posts table
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null default '',
  tags text[] not null default '{}',
  read_time text not null default '1 dk',
  published boolean not null default false,
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_slug_idx on public.posts (slug);
create index if not exists posts_published_created_idx on public.posts (published, created_at desc);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_updated_at on public.posts;
create trigger posts_updated_at
  before update on public.posts
  for each row execute function public.handle_updated_at();

-- RLS
alter table public.posts enable row level security;

drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
  on public.posts for select
  using (published = true);

drop policy if exists "Authenticated users can read all posts" on public.posts;
create policy "Authenticated users can read all posts"
  on public.posts for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can insert posts" on public.posts;
create policy "Authenticated users can insert posts"
  on public.posts for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update posts" on public.posts;
create policy "Authenticated users can update posts"
  on public.posts for update
  to authenticated
  using (true);

drop policy if exists "Authenticated users can delete posts" on public.posts;
create policy "Authenticated users can delete posts"
  on public.posts for delete
  to authenticated
  using (true);

-- Storage bucket for blog images
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

drop policy if exists "Public can view blog images" on storage.objects;
create policy "Public can view blog images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

drop policy if exists "Authenticated can upload blog images" on storage.objects;
create policy "Authenticated can upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-images');

drop policy if exists "Authenticated can update blog images" on storage.objects;
create policy "Authenticated can update blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-images');

drop policy if exists "Authenticated can delete blog images" on storage.objects;
create policy "Authenticated can delete blog images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-images');
