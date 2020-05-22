import React, { useState } from "react"
import Section from "components/common/Section"
import GalleryImage from "./GalleryImage"
import { useStaticQuery, graphql } from "gatsby"
import GalleryModal from "./ImageModal"
import ChildImageSharp from "interfaces/ChildImageSharp"
import "./Gallery.scss"

interface Data {
  galleryImages: {
    nodes: ChildImageSharp[]
  }
}

export default function Gallery() {
  const [galleryFullscreen, setGalleryFullscreen] = useState(false)
  const [activeImage, setActiveImage] = useState<null | ChildImageSharp>(null)
  const { galleryImages }: Data = useStaticQuery(graphql`
    {
      galleryImages: allFile(
        filter: { sourceInstanceName: { eq: "gallery-images" } }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const handleImageClick = (image: ChildImageSharp) => {
    setActiveImage(image)
    setGalleryFullscreen(true)
  }

  return (
    <Section title="Galleri" id="Galleri" className="gallery">
      {galleryImages.nodes.map((image, index) => (
        <div
          className="gallery__image-wrapper"
          onClick={() => handleImageClick(image)}
          onKeyDown={() => handleImageClick(image)}
          role="img"
          key={index}
        >
          <GalleryImage
            style={{ width: "100%" }}
            fluid={{ ...image.childImageSharp.fluid, aspectRatio: 1.2 }}
          />
        </div>
      ))}
      <GalleryModal
        open={galleryFullscreen}
        images={galleryImages.nodes}
        closeModal={() => setGalleryFullscreen(false)}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </Section>
  )
}
