import "./style.css";

const Project = () => {
  return (
    <div className="project">
      <span id="s2-h1">
        <h2>ColSector</h2>
        <img src="/public/school.jpg" alt="" />
        <img src="/public/MERNLOGO.png" alt="" />
      </span>
      <span id="s2-h2">
        <h2>SalesBilling</h2>
        <img src="/public/biling.jpg" alt="" />
        <img src="/public/MERNLOGO.png" alt="" />
      </span>
      <span id="s2-h3">
        <h2>Matrimony</h2>
        <img className="s2-img-2" src="/public/matrimony.jpg" alt="" />
        <img src="/public/MERNLOGO.png" alt="" />
      </span>
      <span id="s2-h4">
        <h2>Flipcart</h2>
        <img src="/public/shoping.jpg" alt="" />
        <img src="/public/MERNLOGO.png" alt="" />
      </span>
    </div>
  );
};

export default Project;
