import { ArrowLeft } from 'lucide-react'
import { CrumbContainer, CrumbLink } from './Breadcrumb.style'

type Props = {
  to: string
  title: string
}

const Breadcrumb = ({ title, to }: Props) => {
  return (
    <CrumbContainer>
      <CrumbLink to={to}>
        <ArrowLeft /> {title}
      </CrumbLink>
    </CrumbContainer>
  )
}

export default Breadcrumb
