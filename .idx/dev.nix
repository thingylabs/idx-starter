# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.openssl
    pkgs.nano
    pkgs.postgresql
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "Prisma.prisma"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
          # and show it in IDX's web preview panel
          command = ["npm" "run" "dev"];
          cwd = "frontend";
          manager = "web";
          env = {
            # Environment variables to set for your server
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        npm-install = ''
          npm i & \
          (cd backend && npm i) & \
          (cd frontend && npm i)
        '';
        postgres-init = ''
          mkdir -p /run/postgresql
          chmod o+w /run/postgresql
          initdb -D backend/.pgdata -U postgres
          pg_ctl -D backend/.pgdata -l backend/.pgdata/logfile start
          createdb mydb -U postgres
        '';
      };
      # Runs when the workspace is (re)started
      onStart = {
        watch-backend = "npm run watch-backend";
        postgres-start = ''
          pg_ctl -D backend/.pgdata/ status && exit
          mkdir -p /run/postgresql
          chmod o+w /run/postgresql
          pg_ctl -D backend/.pgdata -l backend/.pgdata/logfile start
        '';
      };
    };
  };
}
