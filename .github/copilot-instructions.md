# Copilot Instructions for AI Agents

## Project Overview
- This is a Ruby on Rails web application with a modular structure: `app/` contains controllers, models, views, helpers, and assets.
- Uses Devise for authentication (see `app/models/user.rb`, `config/initializers/devise.rb`, and related views).
- Frontend assets are managed with SCSS (see `app/assets/stylesheets/`) and built using Yarn scripts (see `package.json`).
- Slim is used for view templates (`.slim` files in `app/views/`).

## Key Workflows
- **Build CSS:**
  - `yarn build:css` compiles and autoprefixes SCSS to CSS.
  - `yarn watch:css` watches for SCSS changes and rebuilds automatically.
- **Run Tests:**
  - Run all tests with `bin/rails test` (uses fixtures in `test/fixtures/`).
  - System tests use Capybara and Selenium (see `Gemfile` test group).
- **Development Server:**
  - Start with `bin/rails server` (Puma config in `config/puma.rb`).
- **Docker:**
  - Build and run using the provided `Dockerfile`.
  - Uses multi-stage builds and precompiles assets with Bootsnap for performance.
- **Deployment:**
  - Kamal deployment hooks and scripts are in `.kamal/`.
  - Pre-deploy checks use GitHub status (see `.kamal/hooks/pre-deploy.sample`).

## Project Conventions & Patterns
- **Controllers:**
  - Organized by namespace (e.g., `admin/`, `api/`, `help/`, `me/`).
  - Base controllers for each namespace (e.g., `app/controllers/admin/base_controller.rb`).
- **Views:**
  - Use Slim syntax. Shared partials in `app/views/users/shared/`.
  - Devise-related views are customized.
- **Assets:**
  - SCSS entrypoint: `app/assets/stylesheets/application.bootstrap.scss`.
  - Output CSS: `app/assets/builds/application.css`.
- **Testing:**
  - All tests inherit from `ActiveSupport::TestCase` (see `test/test_helper.rb`).
  - Fixtures are loaded automatically.
- **Configuration:**
  - Environment-specific configs in `config/environments/`.
  - Database config in `config/database.yml` (uses ENV vars for secrets).
  - Storage config in `config/storage.yml`.

## Integration Points
- **Devise** for authentication (customized views and mailers).
- **Kamal** for deployment automation.
- **Brakeman, Rubocop, Bundler-Audit** for security and code quality (see `bin/` and `Gemfile`).
- **Bootsnap** for faster boot times (see Dockerfile and Gemfile).

## Examples
- To add a new admin controller: create `app/controllers/admin/your_controller.rb` inheriting from `Admin::BaseController`.
- To add a new SCSS file: place it in `app/assets/stylesheets/` and import it in `application.bootstrap.scss`.
- To run security checks: use `bin/brakeman` or `bin/bundler-audit`.

## References
- `Gemfile`, `package.json`, `config/routes.rb`, `.kamal/`, and `Dockerfile` for more details on dependencies and workflows.

---

For any unclear or missing conventions, please provide feedback to improve these instructions.
