import styled from 'styled-components';
import '../App.css';
import Products from './Products';

const BREAK_POINT_TABLET = 768;

const MainArea = styled.div`
  
  height: 100vh;
  width: 100%;  
  padding: 128px 0px 0 0px;

  .products-box {
    width: 1000px;
    margin: 0 auto;
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
    gap:20px;
    align-items: center;
  }
  .products{
    box-sizing: border-box;
    max-width:303px;    
    flex: 1 1 303px;
    height:450px;
    background-color: #fff;
    color:#333;
  }
  .products:hover{  
    background-color : #54d8ac;
    color : #fff;
  }
  .products>img{
    width:100%;
  }
  .products>h3{     
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.4;
    text-align:left;
    padding:10px;
  }
  .products>p{      
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4;
    text-align:right;
    padding:10px;
  }


  
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    .products-box{
      width:90%;
      flex-direction: column;
    }
    .products{      
      /* flex-basis:auto; */
    }
  }
  
`;

const Render = () => {
  return (
    <>
      <MainArea>
        <div className="products-box">
          <Products/>
          <div className="products">
            <img src="/image/products03.jpg" alt="tea" />
            <h3>햄퍼 Hamper</h3>
            <p>영국 선물문화의 아이콘</p>
          </div>
          <div className="products">
            <img src="/image/products04.jpg" alt="tea" />
            <h3>잼 Jam</h3>
            <p>프리저브드와 마말레이드<br/> 커드의 다채로운 맛</p>
          </div>
          <div className="products">
            <img src="/image/products05.jpg" alt="tea" />
            <h3>티웨어 Teawear</h3>
            <p>당신의 티타임을<br/> 보다 특별하게 만들 티웨어</p>
          </div>
        </div>
      </MainArea>
    </>
  );
};

export default Render;
