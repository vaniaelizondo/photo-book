import profile from "../images/home.jpeg";

export default function Home() {
  return (
    <>
      <div className="information">
        <dl>
          <div>
            <dt>Age</dt>
            <dd>31 ans</dd>
          </div>
          <div>
            <dt>Hauter</dt>
            <dd>181 cm</dd>
          </div>
          <div>
            <dt>Yeux</dt>
            <dd>Marron</dd>
          </div>
          <div>
            <dt>Cheveux</dt>
            <dd>Marron</dd>
          </div>
        </dl>
        <div className="picture">
          <img src={profile} alt="Heloise Profile" />
        </div>
      </div>
    </>
  );
}
