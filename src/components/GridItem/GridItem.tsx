import { levels, Level } from "../../helpers/imc";
import upImage from '../../assets/images/up.png'
import downImage from '../../assets/images/down.png'
import style from './GridItem.module.css';

type Props ={
    item: Level;
};

export const GridItem = ({item} : Props) => {
    return(
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" />
            </div>
            <div className={style.gridTitle}>{item.title}</div>
            {item.yourImc && 
                <div className={style.yourImc}>Seu IMC é de {parseFloat(item.yourImc.toFixed(2))} Kg/m²</div>
            }
            <div className={style.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}