import ConversationDetail from "@/app/components/inbox/ConversationDetail"
import { getUserId } from "@/app/lib/actions";
import React, {useState, useEffect} from 'react'
import Conversation from "@/app/components/inbox/Conversation";
import { UserType } from "../page";
import apiService from "@/app/services/apiServices";
import { getAcessToken } from "@/app/lib/actions";

export type MessageType = {
    id: string
    name: string
    body: string
    conversationId: string
    sent_to: UserType
    created_by: UserType
}

const ConversationPage =  async ({params}: {params: {id: string}}) => {
    const userId = await getUserId();
    const token = await getAcessToken();

    if (!userId || !token) {
      return (
        <main className="max-w-[1500px] max-auto px-6 py-12">
          <p> You Need to be authenticated...</p>
        </main>
      );
    }

    const conversation = await apiService.get(`/api/chat/${params.id}/`)

    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
            token={token}
            userId={userId}
            messages={conversation.messages}
            conversation={conversation.conversation}
             />
        </main>
        )
}


export default ConversationPage