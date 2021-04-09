import "./App.css";
import Select from "./Components/Select";
import {
  FlagUsa,
  FlagUae,
  FlagAfg,
  FlagAlb,
  FlagAgo,
  FlagArg,
  FlagArb,
  FlagAze,
  FlagBa,
  FlagBrb,
  FlagBgd,
  FlagBg,
  FlagBh,
  FlagBi,
  FlagBm,
  FlagBrn,
  FlagBo,
  FlagBr,
  FlagBhs,
  FlagBt,
  FlagBw,
  FlagBlr,
  FlagBz,
  FlagCa,
  FlagCog,
  FlagChe,
  FlagChl,
  FlagEur,
  FlagChn,
  FlagCol,
  FlagCr,
  FlagCub,
  FlagCv,
  FlagCz,
  FlagDj,
  FlagDk,
  FlagDo,
  FlagDz,
  FlagEg,
  FlagJo,
} from "./Components/icons";
import { useState } from "react";

function App() {
  const optionsGoldTypes = [
    { label: "عيار 24", value: "24" },
    { label: "عيار 22", value: "22" },
    { label: "عيار 18", value: "18" },
    { label: "عيار 14", value: "14" },
    { label: "عيار 12", value: "12" },
    { label: "عيار 10", value: "10" },
  ];
  const options = [
    {
      value: "USD",
      label: "الولايات الامريكية المتحدة (الدولار)",
      flag: FlagUsa,
    },
    { value: "EUR", label: "أوروبا (اليورو)", flag: FlagEur },
    { value: "AED", label: "الإمارات العربية المتحدة (الدرهم)", flag: FlagUae },
    { value: "AFN", label: "أفغانستان (أفغاني)", flag: FlagAfg },
    { value: "ALL", label: "ألبانيا (ليك ألباني)", flag: FlagAlb },
    { value: "AOA", label: "أنجولا (الكوانزا)", flag: FlagAgo },
    { value: "ARS", label: "الأرجنتين (البيزو)", flag: FlagArg },
    { value: "AWG", label: "أروبا (فلورن أروبي)", flag: FlagArb },
    { value: "AZN", label: "أذربيجان (المانات الاذربيجاني)", flag: FlagAze },
    { value: "BAM", label: "البوسنة و الهرسك (المارك البوسني)", flag: FlagBa },
    { value: "BBD", label: "بربادوس (دولار بربادوسي)", flag: FlagBrb },
    { value: "BDT", label: "بنغلاديش (تاكا بنغلاديشي)", flag: FlagBgd },
    { value: "BGN", label: "بلغاريا (ليف بلغاري)", flag: FlagBg },
    { value: "BHD", label: "مملكة البحرين (الدينار البحريني)", flag: FlagBh },
    { value: "BIF", label: "مملكة بوروندي (فرنك بوروندي)", flag: FlagBi },
    { value: "BMD", label: "مملكة بوروندي (الدولار البرمودي)", flag: FlagBm },
    { value: "BND", label: "بروناي (الدولار البروني)", flag: FlagBrn },
    { value: "BOB", label: "بوليفيا (بوليفاريو بوليفي)", flag: FlagBo },
    { value: "BRL", label: "البرازيل (الريال البرازيلي)", flag: FlagBr },
    { value: "BTN", label: "الباهاماس (الدولار الباهامي)", flag: FlagBhs },
    { value: "BTN", label: "البوتان (نغولترم بوتاني)", flag: FlagBt },
    { value: "BWP", label: "بوتسوانا (بولا بوتسواني)", flag: FlagBw },
    { value: "BYN", label: "بيلاروسيا (روبل بيلاروسي)", flag: FlagBlr },
    { value: "BZD", label: "بيليز (دولار بليزي)", flag: FlagBz },
    { value: "CAD", label: "كندا (دولار كندي)", flag: FlagCa },
    { value: "CDF", label: "كونغو الديموقراطية (فرنك كنغولي)", flag: FlagCog },
    { value: "CHF", label: "سويسرا (فرنك سويسري)", flag: FlagChe },
    { value: "CLP", label: "تشيلي (بيزو تشيلي)", flag: FlagChl },
    { value: "CNY", label: "الصين (الين الصيني)", flag: FlagChn },
    { value: "COP", label: "كولومبيا (بيزو كولومبي)", flag: FlagCol },
    { value: "CRC", label: "كوستا ريكا (كولون كوستاريكي)", flag: FlagCr },
    { value: "CUP", label: "كوبا (بيزو كوبي)", flag: FlagCub },
    {
      value: "CVE",
      label: "الرأس الأخضر (إيسكودو الرأس الأخضر)",
      flag: FlagCv,
    },
    { value: "CZK", label: "التشيك (الكورون التشيكي)", flag: FlagCz },
    { value: "DJF", label: "جيبوتي (فرنك جيبوتي)", flag: FlagDj },
    { value: "DKK", label: "دانمارك (كرونة دانماركية)", flag: FlagDk },
    { value: "DOP", label: "الدومينيكان (بيزو دومينيكاني)", flag: FlagDo },
    { value: "DZD", label: "الجزائر (دينار جزائري)", flag: FlagDz },
    { value: "EGP", label: "مصر (جنيه مصري)", flag: FlagEg },
    { value: "JOD", label: "الأردن (دينار أردني)", flag: FlagJo },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedGold, setSelectedGold] = useState(null);
  const [goldResult, setGoldResult] = useState("0");

  const getGoldPrice = (currency) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://data-asg.goldprice.org/dbXRates/${currency}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          let price = result.items.filter(
            (item) => item.curr === selectedCurrency.value
          )[0].xauPrice;
          let convertPrice = price * 0.0321;
          let goldToUnit = (convertPrice * +selectedGold.value) / 24;
          setGoldResult(
            goldToUnit.toFixed(2).toString() + selectedCurrency.value
          );
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-side">
          <div className="title">قم باختيار العملة و نوع الذهب</div>
          <div className="multi padding-v-1">
            <Select
              options={options}
              value={
                selectedCurrency != null
                  ? selectedCurrency.label
                  : "قم بالإختيار"
              }
              onSelect={(option) => {
                setSelectedCurrency(option);
              }}
            />
            <Select
              options={optionsGoldTypes}
              value={selectedGold != null ? selectedGold.label : "قم بالإختيار"}
              onSelect={(option) => {
                setSelectedGold(option);
              }}
            />
          </div>

          <div className="button-p-box padding-v-1">
            <button
              className={
                selectedCurrency != null && selectedGold != null
                  ? "button-p b-normal"
                  : "button-p b-disabled"
              }
              disabled={selectedCurrency == null && selectedGold == null}
              onClick={() => getGoldPrice(selectedCurrency.value)}
            >
              الحصول على السعر
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="title">النتيجة (سعر غرام من الذهب)</div>
          <div className="text padding-v-1">{goldResult}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
