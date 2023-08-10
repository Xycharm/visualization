// depend on histogram
import Histogram from "./histogram";

export default function SubHistogram({
  mainDataset,
  dimensions,
  values,
  titleText,
  subTitle,
  date,
}) {
  if (date == 0) return;

  var dataset = mainDataset[date.toString()];
  console.log(dataset);
  return (
    <Histogram
      dataset={dataset}
      dimensions={dimensions}
      values={values}
      titleText={titleText}
      subTitle={subTitle}
      isMain={false}
    />
  );
}
