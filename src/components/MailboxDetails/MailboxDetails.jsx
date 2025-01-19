import { useParams } from "react-router";

export default function MailboxDetails(props) {
  
    const { mailId } = useParams();
    console.log('id: ',mailId)

  
    const mailItem = props.mailbox.find(
        (item)=> item.id === Number(mailId)
    )

    return (
        <>
        <p>Mailbox details</p>
        <h2>Title: {mailItem.title}</h2>
        <h3>Created by: {mailItem.name}</h3>
        <h3>Mailbox size: {mailItem.size}</h3>
        </>
    )
}