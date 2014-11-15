# Merging Laravel

As we're developing Gamestory on Laravel 5, which is a work in progress and in development itself, we regularly need to pull in the latest changes. This document outlines and explains the process.

First, let's add the `laravel` repo as a remote.

    git remote add laravel https://github.com/laravel/laravel.git

Now let's pull Laravel's changes.

    git pull laravel master

Now you'll need to resolve merge conflicts. Most of the time, this is hopefully solved with `git checkout --theirs <file>` unless it's a config file, then you'll need to preserve the configurations, though we try to keep those in the `.env` file.