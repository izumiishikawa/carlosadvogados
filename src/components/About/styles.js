import styled from 'styled-components';

export const ItemRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    align-items: center;
    justify-content: start;

    p {
        font-size: 15px;
    }

    svg {
        color: #bd9d60;
    }
`;

export const Marker = styled.div`
.custom-shape-divider-bottom-1732556244 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1732556244 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 123px;
}

.custom-shape-divider-bottom-1732556244 .shape-fill {
    fill: #FFFFFF;
}
`