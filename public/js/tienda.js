// Aqui tenemos el Controlador

var app = angular.module('App', []);



app.controller('ControladorTienda', function($scope)

{



    $scope.clientes = [];

    $scope.productos = [];

    $scope.ventasRealizadas = [];


    $scope.contadorClientes = 0;

    $scope.contadorProductos = 0;

    



    // Ocultar Formularios

    $scope.formularioClientes = false;

    $scope.formularioProductos = true;

    $scope.reporte = true;

    $scope.reporteDia = true;

    $scope.venta = true;


    $scope.totalVendido = 0 ;




    $scope.agregarDatosCliente = function()

    {   



        if(  $scope.nombre == '' || $scope.apellido == '' ||   $scope.telefono == '' )

        {

            alert("Campos Vacios por Favor Registrarlos");

        }

        else

        {

            // Contador de Cuentas 

            $scope.contadorClientes++;



            if( $scope.contadorClientes <= 10)

            {

                // Agregamos los Datos

                $scope.clientes.push({contador:$scope.contadorClientes,nombre: $scope.nombre,apellido:$scope.apellido,telefono:$scope.telefono})



                // Valida  si ya esta todo el maximo de datos

                if( $scope.contadorClientes >= 2 && $scope.contadorProductos >= 2 )

                {

                    $scope.reporte = false;

                }

            }



            else

            {

                $scope.contadorClientes--;

                alert("Limite Maximo de Cuentas Registradas");

            }



            // Limpiamos los Input

            $scope.nombre = '';

            $scope.apellido = '';

            $scope.telefono = '';

        }





    }





    $scope.agregarDatosProducto = function()

    {   



        if(  $scope.codigo == '' || $scope.descripcion == '' ||   $scope.valor == '' ||   $scope.existencia == '' )

        {

            alert("Campos Vacios por Favor Registrarlos");

        }

        else

        {

            // Contador de Cuentas 

            $scope.contadorProductos++;



            if( $scope.contadorProductos <= 10)

            {

                // Agregamos los Datos

                $scope.productos.push({contador:$scope.contadorProductos,codigo: $scope.codigo,descripcion:$scope.descripcion,valor:$scope.valor,existencia:$scope.existencia})

                

                // Valida  si ya esta todo el maximo de datos

                if( $scope.contadorClientes >= 2 && $scope.contadorProductos >= 2 )

                {

                    $scope.reporte = false;

                }



            }



            else

            {

                $scope.contadorProductos--;

                alert("Limite Maximo de Cuentas Registradas");

            }



            // Limpiamos los Input

            $scope.codigo = '';

            $scope.valor = '';

            $scope.descripcion = '';

            $scope.existencia = '';

        }





    }



    $scope.ShowForm = function(opcion)

    {

        

        switch (opcion)

        {



            case "Clientes":

                

                $scope.formularioClientes = false;

                $scope.formularioProductos = true;



                break;



            case "Productos":

                

                $scope.formularioClientes = true;

                $scope.formularioProductos = false;



                break;





            case "Ocultar":

                

                $scope.formularioClientes = true;

                $scope.formularioProductos = true;



                break;





        } 



    }





    $scope.ReporteDia = function()

    {

        $scope.reporteDia = false;

        $scope.venta = true;

    }  





    $scope.RealizarComprar = function()

    {

        $scope.reporteDia = true;

        $scope.venta = false;

    }





    $scope.comprarProducto = function()

    {   

        var valorPagar = 0;



        angular.forEach($scope.productos, function(producto)

        {   

            if( $scope.ProdutoOp.codigo == producto.codigo)

            {

                if( ( producto.existencia - $scope.cantidadOp ) < 0 )

                {

                    alert("LO SENTIMOS NO HAY ARTICULO SUFICIENTES");

                }



                else

                {

                     producto.existencia -= $scope.cantidadOp;

                     valorPagar = $scope.cantidadOp * producto.valor;

                      alert("Nombre del Cliente:  [ " + $scope.ClienteOp.nombre + "  ]\nCodigo de Producto:  [  " + $scope.ProdutoOp.codigo + "  ]\nCantidad:  [  " + $scope.cantidadOp + "  ]\nValor a Pagar:  [  "+  valorPagar +"  ]");
            
                      
        $scope.ventasRealizadas .push({nombreCliente:$scope.ClienteOp.nombre,codigoProducto: $scope.ProdutoOp.codigo,cantidadUnidades:$scope.cantidadOp,valorTotal:valorPagar });

            $scope.totalVendido += valorPagar;

                      

                }

                   

            }

            

        });



    }       



});
