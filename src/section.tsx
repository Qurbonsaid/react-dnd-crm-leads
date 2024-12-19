import {Box} from "@mui/material";
import {Lead, LeadCard} from "./lead";
import {useDrop} from "react-dnd";
import {Dispatch, SetStateAction} from "react";

export type Section = {
  _id: string;
  title: string;
}

export const SectionCard = ({section, leads, setLeads}: {
  section: Section,
  leads: Lead[],
  setLeads: Dispatch<SetStateAction<Lead[]>>
}) => {
  const [, drop] = useDrop(() => ({
    accept: 'LEAD',
    drop: (item: Lead) => {
      if (item.section !== section._id) {
        setLeads((prev) => [...prev.filter(lead => lead._id !== item._id), {...item, section: section._id}]);
      }
    }
  }))
  const sectionLeads = leads.filter(lead => lead.section === section._id)
  return (
    <Box
      ref={drop}
      sx={{
        padding: '10px',
        margin: '10px',
        border: '1px solid red',
        minHeight: '80vh',
        minWidth: '200px'
      }}
    >
      <p><b>{section.title}</b>
        <mark>{sectionLeads.length}</mark>
      </p>
      {sectionLeads.map(lead => <LeadCard key={lead._id} lead={lead}/>)}
    </Box>
  )
}