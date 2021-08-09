import { useEffect, useState } from "react";

const Radar = () => {
  const [topLeftNumber, setTopLeftNumber] = useState();
  const [topRightNumber, setTopRightNumber] = useState();
  const [bottomLeftNumber, setBottomLeftNumber] = useState();
  const [bottomRightNumber, setBottomRightNumber] = useState();
  const [wrapperSize, setWrapperSize] = useState();
  const [radarSize, setRadarSize] = useState();
  const [radarBorderWidth, setRadarBorderWidth] = useState();

  useEffect(() => {
    setWrapperSize(1000);
    setRadarSize(0.55 * wrapperSize);
    setRadarBorderWidth(0.024 * radarSize);
  });

  return (
    <>
      <div className="num-wrappers">
        {" "}
        <div>
          <h1>Top-Left</h1>
          <select
            className="num-selector"
            onChange={(e) => setTopLeftNumber(e.target.value)}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>
          <h1>Top-Right</h1>
          <select
            className="num-selector"
            onChange={(e) => setTopRightNumber(e.target.value)}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div className="radar-wrapper">
        <div
          className="radar"
          style={{ height: `${radarSize}px`, width: `${radarSize}px` }}
        >
          <div className="piece top-left-piece">
            <div
              className={
                topLeftNumber >= 1
                  ? "ci-top-left circular-item c1"
                  : "circular-item c1"
              }
              id="top-left-1"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topLeftNumber >= 2
                  ? "ci-top-left circular-item c2"
                  : "circular-item c2"
              }
              id="top-left-2"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topLeftNumber >= 3
                  ? "ci-top-left circular-item c3"
                  : "circular-item c3"
              }
              id="top-left-3"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topLeftNumber >= 4
                  ? "ci-top-left circular-item c4"
                  : "circular-item c4"
              }
              id="top-left-4"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
          </div>
          <div className=" piece top-right-piece">
            <div
              className={
                topRightNumber >= 1
                  ? "ci-top-right circular-item c1"
                  : "circular-item c1"
              }
              id="top-right-1"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topRightNumber >= 2
                  ? "ci-top-right circular-item c2"
                  : "circular-item c2"
              }
              id="top-right-2"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topRightNumber >= 3
                  ? "ci-top-right circular-item c3"
                  : "circular-item c3"
              }
              id="top-right-3"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                topRightNumber >= 4
                  ? "ci-top-right circular-item c4"
                  : "circular-item c4"
              }
              id="top-right-4"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
          </div>
          <div className=" piece bottom-left-piece">
            <div
              className={
                bottomLeftNumber >= 1
                  ? "ci-bottom-left circular-item c1"
                  : "circular-item c1"
              }
              id="bottom-left-1"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomLeftNumber >= 2
                  ? "ci-bottom-left circular-item c2"
                  : "circular-item c2"
              }
              id="bottom-left-2"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomLeftNumber >= 3
                  ? "ci-bottom-left circular-item c3"
                  : "circular-item c3"
              }
              id="bottom-left-3"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomLeftNumber >= 4
                  ? "ci-bottom-left circular-item c4"
                  : "circular-item c4"
              }
              id="bottom-left-4"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
          </div>
          <div className=" piece bottom-right-piece">
            <div
              className={
                bottomRightNumber >= 1
                  ? "ci-bottom-right circular-item c1"
                  : "circular-item c1"
              }
              id="bottom-right-1"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomRightNumber >= 2
                  ? "ci-bottom-right circular-item c2"
                  : "circular-item c2"
              }
              id="bottom-right-2"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomRightNumber >= 3
                  ? "ci-bottom-right circular-item c3"
                  : "circular-item c3"
              }
              id="bottom-right-3"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
            <div
              className={
                bottomRightNumber >= 4
                  ? "ci-bottom-right circular-item c4"
                  : "circular-item c4"
              }
              id="bottom-right-4"
              style={{ borderWidth: `${radarBorderWidth}px` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="num-wrappers">
        {" "}
        <div>
          <h1>Bottom-Left</h1>
          <select
            className="num-selector"
            onChange={(e) => setBottomLeftNumber(e.target.value)}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>
          <h1>Bottom-Right</h1>
          <select
            className="num-selector"
            onChange={(e) => setBottomRightNumber(e.target.value)}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>{" "}
        </div>
      </div>
    </>
  );
};

export default Radar;
