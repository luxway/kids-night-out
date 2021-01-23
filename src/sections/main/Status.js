import React from 'react'
import {Breadcrumbs, Container} from '../../components'

const Status = () => {
    return (
        <Container>
            <Breadcrumbs>

                <Breadcrumbs.Item className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon />
                        <Breadcrumbs.Info>
                            Guardian Info
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon />
                        <Breadcrumbs.Info>
                            Emergency Contact
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon />
                        <Breadcrumbs.Info>
                            Child Info
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                <Breadcrumbs.Item className="line">
                    <Breadcrumbs.Group>
                        <Breadcrumbs.Icon />
                        <Breadcrumbs.Info>
                            Payment
                        </Breadcrumbs.Info>
                    </Breadcrumbs.Group>
                    <Breadcrumbs.Line />
                </Breadcrumbs.Item>

                    <Breadcrumbs.Item>
                        <Breadcrumbs.Group>
                            <Breadcrumbs.Icon />
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