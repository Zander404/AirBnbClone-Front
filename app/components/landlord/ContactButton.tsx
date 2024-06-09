'use client'

import useLoginModal from "@/app/hooks/useLoginModal"
import apiService from "@/app/services/apiServices"
import { useRouter } from "next/navigation"

interface ContactButtoProps {
    userId: string | null
    landlordId: string
}

const ContactButton: React.FC<ContactButtoProps> = ({
    userId,
    landlordId
}) => {
    const loginMoldal = useLoginModal()
    const router = useRouter()

    const startConversation = async () => {
        if (userId){
            const conversation = await apiService.get(`/api/chat/start/${landlordId}`)

            if(conversation.conversation_id){
                router.push(`/inbox/${conversation.conversation_id}`)
            }
        }else{
            loginMoldal.open()
        }

    }


    return (
        <div
        onClick={startConversation}
         className="mt-6 py-4 px-6 cursor-pointer bg-airbnb transition hover:bg-airbnb-dark text-white rounded-xl">
            Contact
        </div>
    )
}

export default ContactButton