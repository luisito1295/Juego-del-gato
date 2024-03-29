

function SearchMove(){
	//contar numero bolas
	//si es superior a 1
		//formar linea con bolas
		//cortar linea rival
		//si no se hace nada de lo anterior
			// si es 3
					// borrar una (que no este bloqueando linea rival)
					// movimiento aleatorios
	//sino movimiento aleatorio

	balls = CheckTurn_Count(1);
	if (balls > 1){
		Completed = false;

		//formar linea maquina
		if (Completed == false) Completed = CompleteRow(0,1);
		if (Completed == false) Completed = CompleteRow(1,1);
		if (Completed == false) Completed = CompleteRow(2,1);
		if (Completed == false) Completed = CompleteColumn(0,1);
		if (Completed == false) Completed = CompleteColumn(1,1);
		if (Completed == false) Completed = CompleteColumn(2,1);
		if (Completed == false) Completed = CompleteDiag(1,1);
		if (Completed == false) Completed = CompleteDiag(-1,1);

		//cortar linea rival
		if (Completed == false) Completed = CompleteRow(0,2);
		if (Completed == false) Completed = CompleteRow(1,2);
		if (Completed == false) Completed = CompleteRow(2,2);
		if (Completed == false) Completed = CompleteColumn(0,2);
		if (Completed == false) Completed = CompleteColumn(1,2);
		if (Completed == false) Completed = CompleteColumn(2,2);
		if (Completed == false) Completed = CompleteDiag(1,2);
		if (Completed == false) Completed = CompleteDiag(-1,2);

		if (Completed == false){

		//si no se hizo nada de lo anterior
			if (balls == 3){
				CellFind = false;

				while (CellFind == false){
					x = Math.round(Math.random()*2);
					y = Math.round(Math.random()*2);
					if (board[x][y] == 1 && CheckBlock(x,y) == false) 
						CellFind = true;
				}
				Ball_Sellected_x = x;
				Ball_Sellected_y = y;
				ClearCell(x, y);

			}
			RandomMove();
		}
	}
	else{
		RandomMove();
	}
}

function RandomMove(){
	CellAvailable = false;
	while (CellAvailable == false){
		x = Math.round(Math.random()*2);
		y = Math.round(Math.random()*2);
		if (board[x][y] == 0 && DifMov(x, y) ) 
			CellAvailable = true;
	}
	PaintCell(x, y);
}

function CompleteRow(x, turn_value){
	//si hay 2 en linea
	if (CheckRow(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		Find_final = false;
		for (i=0; i<3; i++){
			if (board[i][x] == 0){
				Find_final = true;
				Find_final_x = i;
				Find_final_y = x;
			}
		}
		//si esta vacia
		if (Find_final == true){
			//si hay tres fichas
			if (CheckTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar linea
				if (turn_value == 1){
					//buscamos la perdida
					Find_Lost = false;

					for (i=0; i<3 && Find_Lost == false; i++){
						if (i != x){
							for (j=0; j<3 && Find_Lost == false; j++){
								if (board[j][i] == 1){
									Find_Lost = true;
									Find_Lost_x = j;
									Find_Lost_y = i;
								}
							}
						}
					}
					//la borramos
					Ball_Sellected_x = Find_Lost_x;
					Ball_Sellected_y = Find_Lost_y;
					ClearCell(Find_Lost_x, Find_Lost_y);
				}
				//sino -> bloquear linea
				else{
					//buscamos una ficha de la maquina que no bloquea
					CellFind = false;

					while (CellFind == false){
						x = Math.round(Math.random()*2);
						y = Math.round(Math.random()*2);
						if (board[x][y] == 1 && CheckBlock(x,y) == false) 
							CellFind = true;
					}
					//la borramos
					Ball_Sellected_x = x;
					Ball_Sellected_y = y;
					ClearCell(x, y);
				}
			}
			
			//pintar la casilla final
			PaintCell(Find_final_x, Find_final_y);
			return true;
		}
		//sino return false
		else return false
	}
	//sino return false
	return false;
			
}

function CompleteColumn(x, turn_value){
	//si hay 2 en linea
	if (CheckColumn(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		Find_final = false;
		for (i=0; i<3; i++){
			if (board[x][i] == 0){
				Find_final = true;
				Find_final_x = x;
				Find_final_y = i;
			}
		}
		//si esta vacia
		if (Find_final == true){
			//si hay tres fichas
			if (CheckTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar linea
				if (turn_value == 1){
					//buscamos la perdida
					Find_Lost = false;

					for (i=0; i<3 && Find_Lost == false; i++){
						if (i != x){
							for (j=0; j<3 && Find_Lost == false; j++){
								if (board[i][j] == 1){
									Find_Lost = true;
									Find_Lost_x = i;
									Find_Lost_y = j;
								}
							}
						}
					}
					//la borramos
					Ball_Sellected_x = Find_Lost_x;
					Ball_Sellected_y = Find_Lost_y;
					ClearCell(Find_Lost_x, Find_Lost_y);
				}
				//sino -> bloquear linea
				else{
					//buscamos una ficha de la maquina que no bloquea
					CellFind = false;

					while (CellFind == false){
						x = Math.round(Math.random()*2);
						y = Math.round(Math.random()*2);
						if (board[x][y] == 1 && CheckBlock(x,y) == false) 
							CellFind = true;
					}
					//la borramos
					Ball_Sellected_x = x;
					Ball_Sellected_y = y;
					ClearCell(x, y);
				}
			}
			
			//pintar la casilla final
			PaintCell(Find_final_x, Find_final_y);
			return true;
		}
		//sino return false
		else return false
	}
	//sino return false
	return false;
			
}

function CompleteDiag(x, turn_value){
	//si hay 2 en linea
	if (CheckDiag(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		Find_final = false;
		
		if (board[1][1] == 0){
			Find_final_x = 1; 
			Find_final_y = 1; 
			Find_final = true
		}
		if (board[(1-x)][2] == 0){
			Find_final_x = (1-x); 
			Find_final_y = 2; 
			Find_final = true
		}
		if (board[(1+x)][0] == 0){
			Find_final_x = (1+x); 
			Find_final_y = 0; 
			Find_final = true
		}
		

		//si esta vacia
		if (Find_final == true){
			//si hay tres fichas
			if (CheckTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar linea
				if (turn_value == 1){
					//buscamos la perdida
					Find_Lost = false;

					for (i=0; i<3 && Find_Lost == false; i++){	
							for (j=0; j<3 && Find_Lost == false; j++){
								if (( (i!=1 || j!=1) &&
									(i != (1-x) || j!=2) &&
									(i!=(1+x) || j!=0))
									&& board[j][i] == 1){
									Find_Lost = true;
									Find_Lost_x = j;
									Find_Lost_y = i;
								}
							}
					}
					//la borramos
					Ball_Sellected_x = Find_Lost_x;
					Ball_Sellected_y = Find_Lost_y;
					ClearCell(Find_Lost_x, Find_Lost_y);
				}
				//sino -> bloquear linea
				else{
					//buscamos una ficha de la maquina que no bloquea
					CellFind = false;

					while (CellFind == false){
						x = Math.round(Math.random()*2);
						y = Math.round(Math.random()*2);
						if (board[x][y] == 1 && CheckBlock(x,y) == false) 
							CellFind = true;
					}
					//la borramos
					Ball_Sellected_x = x;
					Ball_Sellected_y = y;
					ClearCell(x, y);
				}
			}
			
			//pintar la casilla final
			PaintCell(Find_final_x, Find_final_y);
			return true;
		}
		//sino return false
		else return false
	}
	//sino return false
	return false;
			
}
