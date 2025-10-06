import React from "react";
import "../assets/style/malorn.css";

import {TbBrandFacebookFilled} from "react-icons/tb";
import {PiInstagramLogoFill} from "react-icons/pi";
import {PiTiktokLogoFill} from "react-icons/pi";
import {BiLogoTelegram} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "../store/translation";
const AboutUs = () => {
  const { language, setLanguage, t } = useTranslation();
  return (
    <div className="about-us">

      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero-title">{t('about_us')}</h1>
              <p className="hero-subtitle">
               {t('aboutpage_descripton')}
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <h2 className="section-title ">{t('aboutpage_ourjourney')}</h2>
              <p className="lead-custom mb-4">
               {t('aboutpage_journey_description')}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image-container">
                <i className="fas fa-tshirt about-main-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">{t('aboutpage_Our core')}</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-medal value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_premium_quality')}</h4>
                  <p className="card-text">
                    {t('aboutpage_descripton_premium')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-leaf value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_sustainability')}</h4>
                  <p className="card-text">
                   {t('aboutpage_env')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-palette value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_creative_design')}</h4>
                  <p className="card-text">
                   {t('aboutpage_descripton_creative_design')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-heart value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_customer_care')}</h4>
                  <p className="card-text">
                    {t('aboutpage_descripton_customer_care')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-shipping-fast value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_delivery')}</h4>
                  <p className="card-text">
                    {t('aboutpage_descripton_fast_delivery')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-dollar-sign value-icon"></i>
                  <h4 className="card-title mb-3">{t('aboutpage_fair_pricing')}</h4>
                  <p className="card-text">
                    {t('aboutpage_descripton_pricing')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">{t('aboutpage_Our mission')}</h2>
              <p className="lead-custom fs-4 mb-4">
                {t('aboutpage_descripton_mission')}
              </p>
              <div className="row mt-5">
                <div className="col-md-4 mb-3">
                  <i className="fas fa-award fs-1 text-primary mb-3"></i>
                  <h5>{t('aboutpage_qulity_first')}</h5>
                  <p className="text-muted">
                    {t('aboutpage_descripton_qty_first')}
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-globe fs-1 text-success mb-3"></i>
                  <h5>{t('aboutpage_global_reach')}</h5>
                  <p className="text-muted">
                    {t('aboutpage_descripton_global_reach')}
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-handshake fs-1 text-warning mb-3"></i>
                  <h5>{t('aboutpage_trust_integrity')}</h5>
                  <p className="text-muted">
                    {t('aboutpage_descripton_trst_integrity')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="section-title">{t('aboutpage_join_our_community')}</h2>
              <p className="lead-custom mb-4">
                {t('aboutpage_descripton_joinCum')}
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/products" className="btn btn-primary btn-lg px-4">
                <i className="fas fa-shopping-cart me-2"></i>
                {t('shop_now')}
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg px-4">
                        <i className="fas fa-envelope me-2"></i>
                        {t('contact_us')}
                </Link>
              </div>
              <div className="mt-5">
                <h5 className="mb-3">{t('follow_us')}</h5>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="https://t.me/ZAROFit1"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <BiLogoTelegram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@zarofit1?_t=ZS-8xhzoE1dhLw&_r=1"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <PiTiktokLogoFill />
                  </a>
                  <a
                    href="https://www.instagram.com/zaro.fit1?igsh=ZG5reTkyYWVyYWdy"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <PiInstagramLogoFill />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574512297193"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{textAlign: "center"}}
                  >
                    <TbBrandFacebookFilled />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
