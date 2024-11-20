import React from 'react';
import homeData from './homeData.json'; // Import the JSON file

function Home() {
    return (
        <div>
            {/* About */}
            <section className="page-section bg-primary" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">{homeData.about.title}</h2>
                            <hr className="divider divider-light" />
                            <p className="text-white-75 mb-4">{homeData.about.description}</p>
                            <a className="btn btn-light btn-xl" href={homeData.about.buttonLink}>{homeData.about.buttonText}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="page-section" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">{homeData.services.title}</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                        {homeData.services.servicesList.map((service, index) => (
                            <div className="col-lg-3 col-md-6 text-center" key={index}>
                                <div className="mt-5">
                                    <div className="mb-2">
                                        <i className={`${service.icon} fs-1 text-primary`} />
                                    </div>
                                    <h3 className="h4 mb-2">{service.title}</h3>
                                    <p className="text-muted mb-0">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <div id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        {homeData.portfolio.map((item, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>
                                <a className="portfolio-box" href={item.fullsize} title={item.projectName}>
                                    <img className="img-fluid" src={item.thumbnail} alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">{item.category}</div>
                                        <div className="project-name">{item.projectName}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <section className="page-section bg-dark text-white">
                <div className="container px-4 px-lg-5 text-center">
                    <h2 className="mb-4">{homeData.callToAction.title}</h2>
                    <a className="btn btn-light btn-xl" href={homeData.callToAction.buttonLink}>{homeData.callToAction.buttonText}</a>
                </div>
            </section>

            {/* Contact */}
            <section className="page-section" id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">{homeData.contact.title}</h2>
                            <hr className="divider" />
                            <p className="text-muted mb-5">{homeData.contact.description}</p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            <form id="contactForm">
                                {homeData.contact.form.fields.map((field, index) => (
                                    <div className="form-floating mb-3" key={index}>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                className="form-control"
                                                id={field.id}
                                                placeholder={field.placeholder}
                                                style={{ height: '10rem' }}
                                            />
                                        ) : (
                                            <input
                                                className="form-control"
                                                id={field.id}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                            />
                                        )}
                                        <label htmlFor={field.id}>{field.label}</label>
                                    </div>
                                ))}
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-xl" type="submit">{homeData.contact.form.submitButtonText}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <i className="bi-phone fs-2 mb-3 text-muted" />
                            <div>{homeData.contact.contactInfo.phone}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
