import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 12px;
    background-color: #fff;
    margin-bottom: 1rem;
`

const Title = styled.h3`
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 1.125rem;
    `

const SecondaryText = styled.p`
    margin: 0;
    color: #666;
    font-size: 14px;
`

const Thumbnail = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    margin-right: 1rem;
`

const TitleBar = styled.div`
    display: flex;
    align-items: center;
`

const CoverImage = styled.img`
    width: 100%;
    border-radius: 12px 12px 0 0;
`

const Content = styled.div`
    padding: 2rem;
`

const ChildrenContent = styled.div`
    background: #f8f8f8;
    padding: 0.5rem;
    border-radius: 8px;
`




export const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className, children }) => {
    return (
        <Container className={className}>
            {coverImage && <CoverImage src={coverImage} />}
            <Content >
                <TitleBar>
                    {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
                    <div>
                        {title &&  <Title>{title}</Title>}
                        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
                    </div>
                </TitleBar>
                {children && <ChildrenContent>{children}</ChildrenContent>}
            </Content>
        </Container>
    )
}