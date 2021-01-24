import React, {useContext} from 'react'
import {Breadcrumbs, Container} from '../../components'
import {ValidContext, ChildContext} from '../../App'

const Status = () => {
    const [valid] = useContext(ValidContext)
    const [child] = useContext(ChildContext)

    return (
        <Container>
            <Breadcrumbs>

                <Breadcrumbs.Item complete={valid.guardian} className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon complete={valid.guardian} />
                        <Breadcrumbs.Info>
                            Guardian Info
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item complete={valid.emergency} className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon complete={valid.emergency} />
                        <Breadcrumbs.Info>
                            Emergency Contact
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item complete={child.length > 0} className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon complete={child.length > 0} />
                        <Breadcrumbs.Info>
                            Child Info
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item complete={valid.success} className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon complete={valid.success} />
                        <Breadcrumbs.Info>
                            Payment
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                    <Breadcrumbs.Item complete={valid.success}>
                        <Breadcrumbs.Group>
                            <Breadcrumbs.Icon complete={valid.success} />
                            <Breadcrumbs.Info>
                                Success
                            </Breadcrumbs.Info>
                        </Breadcrumbs.Group>
                    </Breadcrumbs.Item>


            </Breadcrumbs>
        </Container>
    )
}

export default Status