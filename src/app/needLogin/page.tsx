import SeoMeta from "@/partials/SeoMeta";

const needLogin = async () => {
  return (
    <>
      <SeoMeta title={"Need Login"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span>
              <h1 className="h2 mb-4">Need login first</h1>
              <div className="content">
                <p>
                  The page you are looking for need login to access.
                </p>
              </div>
              <a href="/" className="btn btn-primary mt-8">
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default needLogin;