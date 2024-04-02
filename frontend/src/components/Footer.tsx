import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="#"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            SkillHub
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              How it works
            </a>
          </div>

          <div>
            <a
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Team
            </a>
          </div>

          <div>
            <a
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{" "}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Animulichki
          </a>
        </h3>
      </section>
    </footer>
  );
};
