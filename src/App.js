import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
            Cabello
          </a>
        </div>
      </nav>
      <div className="row">
        <img
          src="https://demo.w3layouts.com/demos_new/template_demo/26-02-2021/beauty-salon-demo_Free/1671668668/web/images/22.jpg"
          className="img-fluid"
          alt="Hero"
        ></img>
      </div>
      <div className="row">
        <div className="col wthree_head_section">
          <h3 className="w3l_header">
            Our <span>Services</span>
          </h3>
          <p>
            Treat yourself to a facial or celebrating a special occasion,
            aromatherapy, our beauty and skin care services will suit every
            beauty need.
          </p>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="area-img col-6"></div>
              <div className="col-6 p1">
                <h5>FACIAL</h5>
                <p>
                  Phasellus sed iaculis nibh, non suscipit tortor. Aenean ante
                  massa, lobortis et dolor eget, sollicitudin luctus arcu. Donec
                  eros tortor, ultrices in lectus quis, aliquet commodo lectus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 area-inner">
            <div className="row">
              <div className="area-img col-6"></div>
              <div className="col-6 p2">
                <h5>MAKEUP</h5>
                <p>
                  Phasellus sed iaculis nibh, non suscipit tortor. Aenean ante
                  massa, lobortis et dolor eget, sollicitudin luctus arcu. Donec
                  eros tortor, ultrices in lectus quis, aliquet commodo lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="area-img col-6"></div>
              <div className="col-6 p3">
                <h5>NAIL CARE</h5>
                <p>
                  Phasellus sed iaculis nibh, non suscipit tortor. Aenean ante
                  massa, lobortis et dolor eget, sollicitudin luctus arcu. Donec
                  eros tortor, ultrices in lectus quis, aliquet commodo lectus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 area-inner">
            <div className="row">
              <div className="area-img col-6"></div>
              <div className="col-6 p4">
                <h5>HAIR CARE</h5>
                <p>
                  Phasellus sed iaculis nibh, non suscipit tortor. Aenean ante
                  massa, lobortis et dolor eget, sollicitudin luctus arcu. Donec
                  eros tortor, ultrices in lectus quis, aliquet commodo lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
