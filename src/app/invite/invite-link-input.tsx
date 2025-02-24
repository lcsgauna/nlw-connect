'use client'

import { IconButton } from '@/components/IconButton'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { Copy, Link } from 'lucide-react'

interface inviteLinkProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: inviteLinkProps) {
  function copyInviteClick() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteClick} title="Copiar">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
