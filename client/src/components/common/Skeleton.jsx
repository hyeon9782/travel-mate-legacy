import styled from 'styled-components';

const Skeleton = () => {
    return (
        <SkeletonBlock>

        </SkeletonBlock>
    )
}

const SkeletonBlock = styled.div`
    /* @keyframes loading {
        0% {
            transform: translateX(0);
        }
        50%,
        100% {
            transform: translateX(460px);
        }
    } */
    width: 20%;
    border-radius: 15px;
    background: lightgray;


`

export default Skeleton;