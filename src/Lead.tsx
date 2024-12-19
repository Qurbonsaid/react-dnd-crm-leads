import {Box} from "@mui/material";
import {useDrag} from "react-dnd";
import {getEmptyImage} from "react-dnd-html5-backend";
import {useEffect} from "react";

export type Lead = {
  _id: string;
  section: string;
  fullName: string;
  phoneNumber: string;
  createdAt: string;
}

export const LeadCard = ({lead}: { lead: Lead }) => {
  const [{isDragging}, drag, dragPreview] = useDrag(() => ({
    type: 'LEAD',
    item: lead,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  useEffect(() => {
    dragPreview(getEmptyImage(), {captureDraggingState: true})
  }, [])
  return (isDragging ? null :
      <Box
        ref={drag}
        sx={{
          padding: '8px',
          margin: '8px',
          border: '1px solid green',
          backgroundColor: '#ddffdd',
        }}
      >
        <p style={{margin: '0'}}><b>Full name:</b> {lead.fullName}</p>
        <p style={{margin: '0'}}><b>Phone:</b> {lead.phoneNumber}</p>
        <p style={{margin: '0'}}><b>Date:</b> {lead.createdAt}</p>
      </Box>
  )
}