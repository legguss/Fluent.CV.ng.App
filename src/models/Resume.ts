export interface Personal
{
   FullName: string
   Email?: string
   Phone?: string
   Address?: string
   Skype?: string
   LinkedIn?: string
   WebSite?: string
   Title?: string
}

export interface Story
{
   Title?: string
   Items?: string[]
   TokenizedItems?: Token[][]
   MultiStory?: boolean
}

export interface Styles
{
   Id: string
   Image: boolean
}

export interface LinkedIn
{
   Header: string
   Summary: string
   Story: string[]
}

export interface Token
{
   Text: string
   Type?: string
}

export interface HistoryItem
{
   Period?: string
   Company?: string
   Role?: string
   Details?: string[]
   LinkedIn?: LinkedIn
   Projects?: Project[]
   Sections?: Token[][]
   
}

export interface Resume
{
   Id?: string | string[]
   Styles?: Styles
   Personal?: Personal
   Education?: Education[]
   Certificates?: Education[]
   Roles?: Skill[]
   Skills?: Skill[]
   Tools?: Skill[]
   Foundations?: Skill[]
   Products?: Skill[]
   Domains?: Skill[]
   Languages?: Skill[]
   Hobbies?: Skill[]
   Story?: Story
   Statuses?: Status[]
   Experiences?: Experiences
   VisibleProjects?: Project[]
   History?: HistoryItem[]
}

export interface Project
{
   Name: string
   Summary: string
   Type?: string[]
   Status?: string[]
   Roles?: string[]
   Skills?: string[]
   Tools?: string[]
   Tasks?: string[]
   Challenges?: string[]
   Domains?: string[]
   Modules?: string[]
   
}

export interface Skill
{
   Name: string
   Top?: number
}

export interface Education
{
   When?: string
   School?: string
   Department?: string
   Degree?: string
   Description?: string
}

export interface Experiences
{
   Title: string
   Packed: boolean
   TokenizedSummary: Token[][]
   Items: Experience[]
}

export interface Experience
{
   Period: string
   Details: string[]
   TokenizedDetails: Token[][]
   Company: string
   Role: string
}

export interface Status
{
   Title: string
   Items: StatusRole[]
}

export interface StatusRole
{
   Summary: string
   Details: string[]
   JustSummary: boolean
}
