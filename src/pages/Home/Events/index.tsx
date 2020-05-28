import React from "react"
import Section from "components/Section"
import { useStaticQuery, graphql } from "gatsby"
import EventRow from "./EventRow"
import NoEvents from "./NoEvents"
import { sortEventData } from "../../../utils/misc"
import RemarkObject from "interfaces/RemarkObject"
import "./Events.scss"

interface Data {
  eventContent: {
    nodes: RemarkObject[]
  }
}

export default function Events() {
  const { eventContent }: Data = useStaticQuery(graphql`
    {
      eventContent: allFile(
        filter: { sourceInstanceName: { eq: "event-content" } }
      ) {
        nodes {
          sourceInstanceName
          childMarkdownRemark {
            id
            frontmatter {
              title
              date
              eventLink
              solo
            }
          }
        }
      }
    }
  `)

  const filteredData = eventContent.nodes.filter((node) => {
    const { frontmatter } = node.childMarkdownRemark
    const now = new Date()
    if (new Date(frontmatter.date) >= now) return frontmatter.date
    else return null
  })

  const eventsUpcoming = filteredData.length > 0

  return (
    <Section title="Events" id="Events">
      <div className="events">
        {eventsUpcoming ? (
          sortEventData(filteredData).map((item) => {
            const eventData = item.childMarkdownRemark.frontmatter
            const { id } = item.childMarkdownRemark
            return <EventRow eventData={eventData} key={id} />
          })
        ) : (
          <NoEvents />
        )}
        {eventsUpcoming &&
          filteredData.some(
            (event) => event.childMarkdownRemark.frontmatter.solo
          ) && (
            <p className="events__symbol-description">
              <span className="events__asterix">* </span> = Solo
            </p>
          )}
      </div>
    </Section>
  )
}
