var ventana = document.querySelector("#grf");
var ventana2 = document.querySelector("#grf2");
var ventana3 = document.querySelector("#grf3");
var destino = document.querySelector("#format");
    

    var category = Array(); 
    var category_uno = Array(); 
    var category_dos = Array(); 
    var datos = new Array();
    var datos_uno= new Array();
    var datos_dos= new Array();
    var frec;
    var ampl = new Array(); 
    var lambda  = new Array(); 
    var lamd;
    var vel_ang;
    var vel_des; 
    var per; 
    var posicion; 
    var tiempo; 
    var num_ond;  
    var pi = Math.PI; 
    var resultado;
    var resultado_uno;
    var resultado_dos;
    var ciclos;
    var mag_camp;
    var C;
    var camp_elec;
    var camp_mag;
    var U1;
    var e1;
    var ecu_des;
    var num_ele1;
    var num_ele2;
    var num_ele3;
    var num_ele4;
    var mag_asig;


destino.addEventListener('submit', function(e){
    e.preventDefault();

    mag_asig=$("#mag_asig").val();

    mag_camp=$("#mag_camp").val();

    num_ele1 = $("#num_ele1").val();

    num_ele2 = $("#num_ele2").val();

    num_ele3 = $("#num_ele3").val();

    num_ele4 = $("#num_ele4").val();

    U1 = 4*pi*Math.pow(10,-7);

    e1 = 8.85*Math.pow(10,-12);

    category = new Array();

    category_uno = new Array();

    category_dos = new Array();

    datos = new Array();

    datos_uno = new Array();

    datos_dos = new Array();

    C=3*Math.pow(10,8);

    ampl = new Array();

    lambda  = new Array(); 

    lambdaBD = new Array(); 

    mag_camp=mag_camp*Math.pow(10,num_ele1);

    mag_asig=mag_asig*Math.pow(10,num_ele4);

    if($("#num2").val() == 0){
        lambda = 0.000000000001;
        frec = 100000000000000000000;
    }else if(($("#num2").val() == 1)){
        lambda = 0.00000000001;
        frec = 100000000000000000;
    }else if(($("#num2").val() == 2)){
        lambda = 0.0000000001;
        frec = 100000000000000;
    }else if(($("#num2").val() == 3)){
        lambda = 0.000000001;
        frec = 100000000000000;
    }else if(($("#num2").val() == 4)){
        lambda = 0.000001;
        frec = 100000000000000;
    }else if(($("#num2").val() == 5)){
        lambda = 0.01;
        frec = 100000000000000;
    }else if(($("#num2").val() == 6)){
        lambda = 0.01;
        frec = 100000000000000;
    }
    else if(($("#num2").val() == 7)){
        lambda = 0.001;
        frec = 100000000000000;
    }else if(($("#num2").val() == 8)){
        lambda = 0.01;
        frec = 100000000000;
    }
    else if(($("#num2").val() == 9)){
        lambda = 0.01;
        frec = 30000000000;
    }else if(($("#num2").val() == 10)){
        lambda = 10;
        frec = 10000000;
    }else if(($("#num2").val() == 11)){
        lambda = 100;
        frec = 1000000;
    }else if(($("#num2").val() == 12)){
        lambda = 1000;
        frec = 1000;
    }else if(($("#num2").val() == 13)){
        lambda = 1000;
        frecuencia = 1000;
    }else if(($("#num2").val() == 14)){
        lambda = 1000;
        frec = 1000000000;
    }else if(($("#num2").val() == 15)){
        lambda = 1000;
        frec = 10;
    }else if(($("#num2").val() == 16)){
        lambda = 1;
        frec = 100000000;
    }else if(($("#num2").val() == 17)){
        lambda = 10;
        frec = 1000000000;
    }

    
   
   
    if($("#num5").val() == 20){
        camp_elec=mag_camp;
        camp_mag=U1*e1*camp_elec*C; 
    }else if(($("#num5").val() == 21)){
        camp_mag=mag_camp;
        camp_elec=mag_camp*C; 
    }
   
   
    
    ampl = $("#mag_camp").val();  
    mag_asig = $("#mag_asig").val();  
    ciclos = $("#ciclos").val();
    mag_asig=mag_asig*Math.pow(10,num_ele4);

    
    if($("#num6").val() == 27){
        frec =C/mag_asig;
        lamda=mag_asig;
    }else if(($("#num6").val() == 28)){
        lamda =C/mag_asig;
        frec=mag_asig;
        
    }
    

    
    ecu_des=camp_elec*camp_mag;

    per = 1 / frec;
  
    vel_ang = 2*pi*frec;

    num_ond = 2*pi/(C/frec);
    
    vel_des= C; 

    LambdaFinal = C/frec;

    for (var i = 0; i <= (per * 10 ) ; i+= (per / 8)) {

        resultado = ecu_des *Math.pow(Math.cos((num_ond * (vel_des * i)) - (vel_des * i) ),2);
        
        
        datos.push(resultado);
        category.push(vel_des * i);

    }
  
    for (var i = 0; i <= (per * 10 ) ; i+= (per / 8)) {

        resultado1 = camp_elec * Math.cos((num_ond * (vel_des * i)) - (vel_des * i) );
        
        
        datos_uno.push(resultado1);
        category_uno.push(vel_des * i);

    }

    for (var i = 0; i <= (per * 10 ) ; i+= (per / 8)) {

        resultado2 = camp_mag * Math.cos((num_ond * (vel_des * i)) - (vel_des * i) );
        
        
        datos_dos.push(resultado2);
        category_dos.push(vel_des * i);

    }
   


    $("#frec").html(frec);
    $("#per").html(per);
    $("#LambdaFinal").html(LambdaFinal);
    $("#numonda").html(num_ond);
    $("#velang").html(vel_ang);
    $("#vel_des").html(vel_des);
    $("#camp_elec").html(camp_elec+"  Cos ( "+num_ond+"  X  -  "+vel_ang+"  t)  i");
    $("#camp_mag").html(camp_mag+"  Cos ( "+num_ond+"  X  -  "+vel_ang+"  t)  j");
    $("#ecu_des").html(ecu_des+"  Cos^2 ( "+num_ond+"  X  -  "+vel_ang+"  t)  k");

    Highcharts.chart(ventana, {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Grafica Direcionamiento'
        },
        subtitle: {
            text: ecu_des+"  Cos^2 ( "+num_ond+"  X  -  "+vel_ang+"  t)  k"
        },
        xAxis: {
                categories: category
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '',
            data: datos
        }]
    });


    Highcharts.chart(ventana2, {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Campo Electrico'
        },
        subtitle: {
            text: camp_elec+"  Cos ( "+num_ond+"  X  -  "+vel_ang+"  t)  i"
        },
        xAxis: {
                categories: category_uno
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '',
            data: datos_uno
        }]
    });

    Highcharts.chart(ventana3, {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Campo Magnetico'
        },
        subtitle: {
            text:camp_mag+"  Cos (  "+num_ond+"  X  -  "+vel_ang+"  t)  j"
        },
        xAxis: {
                categories: category_dos
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '',
            data: datos_dos
        }]
    });

});
