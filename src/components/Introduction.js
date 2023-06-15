import React from "react"
import { PageChapter } from "./PageChapter"
export default function IntroductionAll() {
  const headline = "ÜBER UNS"
  const subTitle = "Wir sind Stefan und Marc."
  const subSubTitle = "Deine Hochzeitsfotografen für jeden Schahahaheoeowieie."
  const subSubSubTitle = "CENTER"
  const paragraph = `Wir bieten euch authentische Hochzeitsfotografie, die euch so
  zeigt wie euch eure Familie und Freunde kennen,- ehrlich und
  ungestellt. Eines vorweg, wir wollen mehr als nur eure Fotografen
  sein. Und warum? Weil wir die Freude, die Aufregung, die Spannung
  und die Gefühle an diesem Tag schlichtweg lieben. Wir fiebern und
  jubeln mit euch und haben gemeinsam eine Wahnsinns Zeit. Uns geht
  es nicht um Perfektion. Wir konzentrieren uns auf eure Liebe,
  finden eure Emotionen und erzählen eure Geschichte.Wir fiebern und
  jubeln mit euch und haben gemeinsam eine Wahnsinns Zeit. Uns geht
  es nicht um Perfektion. Wir konzentrieren uns auf eure Liebe.`
  const subParagraph = ""
  const image = "../assets/images/marc.jpg"
  const imagePosition = "left"
  return (
    <PageChapter
      headline={headline}
      subTitle={subTitle}
      subSubTitle={subSubTitle}
      subSubSubTitle={subSubSubTitle}
      paragraph={paragraph}
      subParagraph={subParagraph}
      imagePath={image}
      imagePosition={imagePosition}
      alt={"header"}
    />
  )
}

export function IntroductionMarc() {
  const headline = "ÜBER Marc"
  const subTitle = "Mein Name ist Jeff, aber meine Freunde nennen mich Jeff."
  const subSubTitle = "Jochen, Jogi oder Jockel - hauptsache J-Town."
  const subSubSubTitle = "CENTER"
  const paragraph = `Aramsamsam, aramsamsam, gulli gulli gulli gulli gulli meine Entchen.`
  const subParagraph = ""
  const image = "../assets/images/marc.jpg"
  const imagePosition = "right"
  return (
    <PageChapter
      headline={headline}
      subTitle={subTitle}
      subSubTitle={subSubTitle}
      subSubSubTitle={subSubSubTitle}
      paragraph={paragraph}
      subParagraph={subParagraph}
      imagePath={image}
      imagePosition={imagePosition}
      alt={"marc"}
    />
  )
}

export function IntroductionStefan() {
  const headline = "ÜBER STEFAN"
  const subTitle = "Ich bin Stefan, Jogibär."
  const subSubTitle = "Ein Jogi kommt selten allein - aber oiner isch koiner."
  const subSubSubTitle = "CENTER"
  const paragraph = `Langusten die frusten und Muschen die huschen und kuschen.`
  const subParagraph = ""
  const image = "../assets/images/marc.jpg"
  const imagePosition = "left"
  return (
    <PageChapter
      headline={headline}
      subTitle={subTitle}
      subSubTitle={subSubTitle}
      subSubSubTitle={subSubSubTitle}
      paragraph={paragraph}
      subParagraph={subParagraph}
      imagePath={image}
      imagePosition={imagePosition}
      alt={"stefan"}
    />
  )
}
