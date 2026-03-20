"use client";

import { useState } from "react";

type FilterCategory =
  | "all"
  | "wedding"
  | "events"
  | "brand-images"
  | "photoshoot"
  | "videography";

interface PortfolioItem {
  src: string;
  category: FilterCategory;
  label: string;
  type: "image" | "video";
}

const portfolioItems: PortfolioItem[] = [
  { src: "/assets/images/SnapInsta.to_437958942_1143707440274636_7240183413729827189_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_440166504_378576151309282_5840356128337165510_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_465334383_18094834462485065_746557291774596053_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_465443644_18094834534485065_1986557673383027675_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_465549745_18094834555485065_5887671266968352609_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_465340019_18094834564485065_7440548868409100569_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_465699083_18094834525485065_4342995782797296091_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_470167483_18099086470485065_4678674640724650512_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_470242926_18099086527485065_2302525465205300116_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_470424373_18099086479485065_7028451986654187453_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_470425233_18099086491485065_6230283709604424243_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_472197701_18100850737485065_398132390816049664_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_472261824_18100866640485065_1384518166510776943_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_472270109_18100866736485065_6155936994093118088_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_472335663_18100850689485065_782646976127461640_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_472448460_18101477593485065_8293620360127253795_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_472450530_18101477563485065_3679414540189546246_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_472627974_18101477524485065_6736872116143527298_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_474687445_18102957220485065_8955730547995065069_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_474699619_18102957202485065_8556785853705168904_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_474765204_18102957256485065_1543349861308339481_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_474969261_18102957265485065_1143825680312417307_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_482123482_18106116580485065_6116543111806516508_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_549780642_18125007607485065_7833918867957058545_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_490457835_18110805487485065_3847422714803221053_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_491446828_18110805427485065_9058076831478117538_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_491463487_18110805478485065_5143115011439325478_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_491536204_18110805469485065_889123957138325937_n.jpg", category: "brand-images", label: "Brand Images", type: "image" },
  { src: "/assets/images/SnapInsta.to_497323540_18113158948485065_4556680426189371402_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_497398963_18113158987485065_407417339772587865_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_503390718_18115158202485065_5004893624698033768_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_503579472_18115158349485065_6635829405188321186_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_508655871_18082038238829692_8993484353659178768_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_509043954_18082038178829692_2202700432229850407_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_540718578_18123351829485065_9182190633819545645_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_541123061_18123351865485065_4608509414340257465_n.jpg", category: "wedding", label: "Wedding", type: "image" },
  { src: "/assets/images/SnapInsta.to_548904601_18125007571485065_8426044411169756846_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_548933299_18125007580485065_2314099086392540820_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_549768567_18125201041485065_5341928092186362197_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_550205794_18125201056485065_7944179371514869126_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_550363221_18125007634485065_4792432928368293310_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_550497782_18125201077485065_7132795523234237094_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_551432126_18125201086485065_2665888265890083830_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_552437912_18125669677485065_8979100094813927696_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_553668552_18125669695485065_8984306614472943049_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_552922547_18125669686485065_2861881385132098352_n.jpg", category: "events", label: "Events", type: "image" },
  { src: "/assets/images/SnapInsta.to_564426571_18127944169485065_5563539843888798588_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  { src: "/assets/images/SnapInsta.to_564650763_18127944133485065_2119746666515574361_n.jpg", category: "photoshoot", label: "Photoshoot", type: "image" },
  // Videos
  { src: "/assets/images/SnapInsta.to_AQM2wSQuAlpUCCPdDWRrHLGqibIhd6_5_wHZz1nFnX4bebOFNDHkYFt3_k0YpKqZoclPR-d6aoNsPCdbQxLV85hUv6oPnbXRoE1BuA8.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQM5q1R6FwBBWVboW-8OasyR6OneExhIWVZp2GhR11g9YzMaf1L9aOt-6vjGI-oQBJu6spI56hMTM-L7jnmn_FnQihWrupRx9MvwKwc.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQMds_4mvUSnNQL8SfSV9ydNYGRTCfdqt7Ii-2YpRuKqPaMSOM4YtQsrpF8h58184LVwc90L4j-wqp0cBsw2kZLCd6vdLnbYqtMU0-U.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQMjTHh1p5JHdOLyKwxLFParqdiOqTLDcLbV1bysmFTDWvK9zEZtZ0isYTswi6SrqzZoKjpYm61nXvI2KAOLBPo8XBbcut7kxrsd444.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQMohGAqZLufhMVRbOb14Yoi3gkpS8S2YXBvzW4-nmvaX48mu0h2NI6mRclEknlatrJk4vakDS_PG0FQiv0eRakKqgX867q8rg8N6sQ.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQO-v4Mznr4EkoLUp6sw-J6rHQR-tXLq_H4IyxKtspdtQGndlPc-DF840HL4Pe0KcNxvVz-lQqPBEdauiUJfUmh2rHrV8c4wpKJESg8.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQPebWEBgcWw5x08fMG2_m1j-4Czxmw80LhHpA3rcs3nNj9ZGLzymaDkPZPOhb2jgdR5Cl4D5E3VRtdKgYdwebNatefcoKWBVaGf_Sg.mp4", category: "videography", label: "Videography", type: "video" },
  { src: "/assets/images/SnapInsta.to_AQPusKjpYfbjsKtzAMKt3IO0Th7laXVT_sG27OLZiRPkxkfHZfV68C-Ux653aIJtl6MWj6T7lnV2abj985bL6SEVfcf83IWNobvLU5I.mp4", category: "videography", label: "Videography", type: "video" },
];

const filters: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Wedding", value: "wedding" },
  { label: "Events", value: "events" },
  { label: "Brand Images", value: "brand-images" },
  { label: "Photoshoot", value: "photoshoot" },
  { label: "Videography", value: "videography" },
];

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="filter-buttons mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {filtered.map((item, i) => (
          <div key={i} className="portfolio-item">
            {item.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.src} alt={item.label} loading="lazy" />
            ) : (
              <video controls playsInline muted loop>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <div className="port-overlay" />
            <div className="portfolio-caption">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
