import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    margin-top: 50px;
`

const SubTitleContainer = styled.div`
    margin-right: 62px;
    color: #D9D9D9;
    font-size: 18px;
`

const TagsItens = styled.div `
    display: flex;
    gap: 24px;
`

const Tag = styled.button `
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    padding: 10px 8px;
    background: rgba(217, 217, 217, 0.30);
    border-radius: 10px;
    border: none;
`

const Tags = () => {
    return(
        <TagsContainer>
            <SubTitleContainer>
                <p>Busquem por tags:</p>
            </SubTitleContainer>
            <TagsItens>
                {tags.map(tag => <Tag key={tag.id} style={tag.titulo === "Todas" ? { border: "2px solid var(--Degrad-com-rosa, #C98CF1)"}: {}}>{tag.titulo}</Tag>)}
            </TagsItens>
        </TagsContainer>
    )
}

export default Tags