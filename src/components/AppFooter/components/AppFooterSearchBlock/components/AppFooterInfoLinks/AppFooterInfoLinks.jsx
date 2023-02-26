import "./AppFooterInfoLinks.scss";
const AppFooterInfoLinks = () => {
  const links = [
    { name: "Банк России", url: "https://cbr.ru" },
    { name: "Интернет-приемная Банка России", url: "https://cbr.ru/Reception" },
    {
      name: "Реестр микрофинансовых организаций",
      url: "https://cbr.ru/microfinance/registry",
    },
  ];
  return (
    <div className="footer-info-links">
      <div className="footer-info-links-first">
        <div className="footer-info-links-first-text">
            ООО МФК «ЭкспрессДеньги» является <br />
            членом СРО «МиР» с 29 декабря 2021 года
        </div>
        <a
          className="footer-info-links-first-link"
          href="https://npmir.ru"
          target="_blank"
        >
          https://npmir.ru
        </a>
        <div className="footer-info-links-first-text">
            107078, г. Москва, Орликов переулок, д.5, <br />
            стр.1, этаж 2, пом.11
        </div>
          <br />
        <div className="footer-info-links-first-text">
          ООО МФК «ЭкспрессДеньги» являлось <br />
            членом СРО «Единство» Дата <br />
            прекращения членства 14 декабря 2021 года
        </div>
      </div>
      <div className="footer-info-links-second">
        {!!links.length &&
          links.map((link, idx) => {
            return (
              <div key={idx}>
                <div className="footer-info-links-second-text">{link.name}</div>
                <a
                  className="footer-info-links-second-link"
                  href={link.url}
                  target="_blank"
                >
                  {link.url}
                </a>
              </div>
            );
          })}
      </div>
      <div className="footer-info-links-third">
        <div className="footer-info-links-third-text">
          Потребитель финансовых услуг вправе <br />
            направить обращение в Службу <br />
            финансового уполномоченного
        </div>
        <a
          className="footer-info-links-third-link"
          href="https://finombudsman.ru"
          target="_blank"
        >
          https://finombudsman.ru
        </a>
        <div className="footer-info-links-third-text">
          119017, г. Москва, Старомонетный пер., дом 3 <br /> <br />
            8 (800) 200-00-10 понедельник - пятница <br />
            с 08:00 до 20:00 (МСК), кроме нерабочих <br />
            праздничных дней
        </div>
      </div>
    </div>
  );
};

export default AppFooterInfoLinks;
