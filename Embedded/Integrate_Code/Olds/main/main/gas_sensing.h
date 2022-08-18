

int gas_check(){
  for(int i=0;i<20;i++){
    int gas =analogRead(A0); //측정값 저장

    if(gas > 900){ //gas 과다 측 담배 
      return 1;
    }
  }
  

  return 0;
  
}
