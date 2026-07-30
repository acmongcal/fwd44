import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import lensImage from '../images/olympus-12-100-pro-lens.jpg';
import '../scss/styles-tabs.scss';

const Main = () => (
    <main>
        <section className="product-info">
            <h2>Olympus 12-100 F4 Pro</h2>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Specifications</Tab>
                    <Tab>Reviews</Tab>
                </TabList>
                <TabPanel>
                    <h2 className="tab-panel-title">Overview</h2>
                    <div className="tab-panel-content tab-panel-content-overview">
                        <figure>
                            <img src={lensImage} alt="Olympus 12-100mm F4 pro lens" />
                        </figure>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className="tab-panel-title">Specs</h2>
                    <div className="tab-panel-content tab-panel-content-specs">
                        <table>
                            <thead>
                                <tr>
                                    <th>Spec</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Focal Length</td>
                                    <td>12 - 100mm</td>
                                </tr>
                                <tr>
                                    <td>Minimum Aperture</td>
                                    <td>F4</td>
                                </tr>
                                <tr>
                                    <td>Maximum Aperture</td>
                                    <td>F22</td>
                                </tr>
                                <tr>
                                    <td>Angle of View</td>
                                    <td>84&deg; to 12&deg;</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>1.23 lb / 561 g</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Specs from <a href="https://www.bhphotovideo.com/">B&amp;H Photo Video</a> </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className="tab-panel-title">Reviews</h2>
                    <div className="tab-panel-content tab-panel-content-reviews">
                        <div className="review">
                            <div className="rating">
                                <h4 className="rating-heading">Rating:</h4>
                                <span className="rating-value">5/5</span>
                            </div>
                            <h3>Not the smallest or lightest but superb quality all around</h3>
                            <p className="author"><span className="by">By:</span> <span className="author-name">Thomas</span></p>
                            <p className="review-text">This definitely is the perfect all around and travel lens. Yes, it's a bit large and heavy for Micro Four Thirds standards, but it may as well be the only lens you take on a trip...</p>
                        </div>
                        <div className="review">
                            <div className="rating">
                                <h4 className="rating-heading">Rating:</h4>
                                <span className="rating-value">5/5</span>
                            </div>
                            <h3>Beautiful piece of glass</h3>
                            <p className="author"><span className="by">By:</span> <span className="author-name">Doug</span></p>
                            <p className="review-text">This lens is a fantastic performer, IS is great, the ability to turn it off is a nice plus, and the range is excellent from close up to wide open it's very impressive.</p>
                        </div>
                        <div className="review">
                            <div className="rating">
                                <h4 className="rating-heading">Rating:</h4>
                                <span className="rating-value">3/5</span>
                            </div>
                            <h3>To early to tell</h3>
                            <p className="author"><span className="by">By:</span> <span className="author-name">Scott</span></p>
                            <p className="review-text">I got this lens with a new Olympus OM-D E-M1 Mark II . To upgrade to the current firmware I downloaded a program from Olympus and plugged in the camera with the 12-100 lens on...</p>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </section>
        <section className="credit-info">
            <h2>Content and Image Credits</h2>
            <p>The above content is for educational purposes only. The lens image and the text copy are from: <a href="https://www.bhphotovideo.com/c/product/1281427-REG/olympus_v314080bu000_m_zuiko_digital_ed_12_100mm.html">B&amp;H Photo Video's Olympus 12-100mm F4 Pro product page</a>.</p>
        </section>
    </main>
);

export default Main;
