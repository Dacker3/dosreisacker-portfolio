export const TechIcon = ({component}: {component: React.ElementType}) =>{
    const Componet = component;
    return (
        <>
        <Componet className = "size-10 fill-[url(#tech-ion-gradient)]"/>
        <svg className = "size-0 absoulte">
            <linearGradient id="tech-ion-gradient">
                <stop offset="0%" stopColor="rgb(110 231 183)" />
                <stop offset="100%" stopColor="rgb(56 189 249)" />
            </linearGradient>
        </svg>
        </>
    );
}