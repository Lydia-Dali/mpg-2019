import React, { Component } from "react";

import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";

import './SliderActu.css';




export default class SliderActu extends Component {
  render() {

    return (
      <div>
        <MDBContainer>
          <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
            <MDBCarouselInner>
              <MDBRow>
                <MDBCarouselItem itemId="1">
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="http://www.mucem.org/sites/default/files/styles/thumb_620x430/public/2018-01/mucem_terrasse_j4_%C2%A9m%C3%B4le-passedat.jpg?itok=AYtqTyPC" />
                      <MDBCardBody>
                        <MDBCardTitle>Exposition</MDBCardTitle>
                        <MDBCardTitle>Milles Créateurs de goût</MDBCardTitle>
                        <MDBCardTitle>Mucem – Marseille</MDBCardTitle>
                        <MDBCardText>                    Du 21 au 24 mars 2019

                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://www.myprovence.fr/img/annonce/13EVT101129_1_WEB/s.jpg?s=51904b249484606d973082fdaae2ab84" />
                      <MDBCardBody>
                        <MDBCardTitle>Dîners insolites</MDBCardTitle>
                        <MDBCardTitle>Théâtre Nono – Marseille</MDBCardTitle>
                        <MDBCardText>
                          22-23 mars – 29-30 mars – 5-6 avril 2019
                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://i0.wp.com/www.hoteledmondrostand.com/actualites/wp-content/uploads/2017/04/bouillabaisse-e1491634196938.jpg?resize=800%2C587" />
                      <MDBCardBody>
                        <MDBCardTitle>Festival Goût de France</MDBCardTitle>
                        <MDBCardTitle>Dans tous les restaurants partenaires – Paca</MDBCardTitle>                        
                        <MDBCardText>
                          Du 21 mars au 24 mars
                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/sorties/bars/terrasse-de-reve/la-terrasse-de-reve-de-l-intercontinental-marseille-hotel-dieu-a-marseille-bouches-du-rhone/65152324-1-fre-FR/La-terrasse-de-reve-de-L-InterContinental-Marseille-Hotel-Dieu-a-Marseille-Bouches-du-Rhone.jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>Dîner de Chefs</MDBCardTitle>
                        <MDBCardTitle>Hôtel Dieu</MDBCardTitle>
                        <MDBCardTitle>Intercontinental – Marseille</MDBCardTitle>
                        <MDBCardText>
                          18 mars 2019 à partir de 19h
                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="http://www.museeregardsdeprovence.com/wp-content/gallery/art-mange-lart/alussi-ludovic-le-poulpe-bd.jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>Exposition</MDBCardTitle>
                        <MDBCardTitle>L’art Mange L’art</MDBCardTitle>
                        <MDBCardTitle>Musée Regards de Provence – Marseille
</MDBCardTitle>
                        <MDBCardText>
                          Du 22 mars au 13 octobre 2019
                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4" className="clearfix d-none d-md-block">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://pbs.twimg.com/media/CcSssmLXEAAlIpB.jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>Gastronomie</MDBCardTitle>
                        <MDBCardTitle>Les Oursinades </MDBCardTitle>
                        <MDBCardTitle>Istres</MDBCardTitle>
                        <MDBCardText>
                          9-10 mars 2019
                    </MDBCardText>
                        <MDBBtn color="primary">En savoir plus</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCarouselItem>
              </MDBRow>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}