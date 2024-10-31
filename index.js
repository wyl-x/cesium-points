const LINE_WIDTH = 4;
const MODEL_URI = "assets/car.glb";
const START_ICON = "assets/start.png";
const PERSON_ICON = "assets/icon.png";
const END_ICON = "assets/end.png";
const ICON_SIZE = 30;
const LINE_COLOR_1 = "#92f10f";
const LINE_COLOR_2 = "#0205fb";
const DURATION = 120000; // 实际时间是依据Cesium时钟
const INTERVAL = 50; // 间隔多少ms取一个点位, 用于更新轨迹颜色

let entity

function drawHistory(viewer, positions) {
  // 设置地图视角
  const mid = Math.floor(positions.length/2)
  var center = Cesium.Cartesian3.fromDegrees(
    positions[mid].lon,
    positions[mid].lat,
    5000
  );
  viewer.scene.camera.setView({
    destination: center,
    orientation: {
      heading: Cesium.Math.toRadians(90),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0,
    },
  });

  entity = viewer.entities.add({
    name: "polygon",
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        111.431666,
        30.562818,
        111.441666,
        30.572818,
        111.431666,
        30.582818,
      ]),
      extrudedHeight: 10.0,
      material: Cesium.Color.BLUE.withAlpha(0.5),
      height: 0,
      outline: true,
    }
  });
}


function handleClick() {
  console.log(viewer)
}