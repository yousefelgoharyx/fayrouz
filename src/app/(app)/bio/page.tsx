import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">A bio about Fayrouz</h1>
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-[294px] flex-[0_0_220px]">
          <Image src="/personal.jpg" fill alt="Fayrouz" />
        </div>
        <div className="flex-[3]">
          <p className="mb-4 leading-relaxed">
            Nouhad Wadie&apos; Haddad (Arabic: نهاد وديع حداد, Lebanese Arabic
            pronunciation: [nʊhæːd wædiːʕ ħædːæːd]; born November 21, 1934),
            known as Fairuz (Arabic: فيروز, Arabic pronunciation: [fajruːz];
            also spelled Fairouz, Feyrouz or Fayrouz), is a Lebanese singer. She
            is considered by many as one of the leading vocalists and most
            famous singers in the history of the Arab world. Fairuz is
            considered the musical icon of Lebanon and is popularly known as
            &quot;the soul of Lebanon&quot;.
          </p>
        </div>
      </div>
      <div>
        <p className="mb-4 leading-relaxed">
          Fairuz began her musical career as a teenager at the national radio
          station in Lebanon in the late 1940s as a chorus member. Her first
          major hit, &quot;Itab&quot;, was released in 1952 and made her an
          instant star in the Arab world. In the summer of 1957, Fairuz held her
          first live performance at the Baalbeck International Festival where
          she was awarded with the honor of &quot;Cavalier&quot;, the highest
          medal for artistic achievement by Lebanese president Camille Chamoun.
          Fairuz&apos;s fame spread throughout the Arab world in the 1950s and
          1960s, leading her to perform outside of Lebanon in various Arab
          capitals, including Damascus, Amman, Cairo, Rabat, Algiers, and Tunis.
          She has received multiple tokens of recognition and awards throughout
          her career including the Key to the Holy City awarded by the Jerusalem
          Cultural Committee, the Jordanian Medal of Honor presented by King
          Hussein of Jordan, the French Commandeur des Arts et des Lettres and
          the Chevalier de la Légion d&apos;honneur, the Highest Artistic
          Distinction, awarded by Tunisian President Zine El Abidine Ben Ali.
          Throughout the years, she headlined at the most important venues in
          the world such as Albert Hall and Royal Festival Hall in London,
          Carnegie Hall, Lincoln Center and United Nations General Assembly
          Lobby in New York, the Olympia and Salle Pleyel in Paris, and the
          Odeon of Herodes Atticus in Athens.
        </p>
        <p className="mb-4 leading-relaxed">
          In a career spanning over six decades, Fairuz has recorded nearly 1500
          songs, released more than 80 albums, performed in 20 musicals and sold
          over 150 million records worldwide, making her one of the highest
          selling Middle-Eastern artists of all time, and one of the
          best-selling music artists in the world.
        </p>
      </div>
    </div>
  );
};

export default Page;
