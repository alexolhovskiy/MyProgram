<?php 
    header("Content-Type: application/json; charset=UTF-8");
    
   
    
//////////////////////ADD_DATA///////////////////////////////////
    
//     if(isset($_GET["x"])){
        
//         $obj =json_decode($_GET["x"], false);
        
//         $db = new mysqli("localhost", "root", "root", "test", 3306);
        
//         $request="INSERT INTO ".$obj->table." (x,datetime) VALUES (?,?)";
//         //$stmt = $db->prepare("INSERT INTO ? (x,datetime) VALUES (?,?)");
//         $now = date("Y-m-d H:i:s"); 
//         $stmt = $db->prepare($request);
//         $stmt->bind_param("ds",$obj->x,$now);
//         $stmt->execute();
        
//         $stmt->close();
//         $db->close();
        
//         echo $now;
//     }
    
////////////////////////ADD_DATA///////////////////////////////////
    
    if(isset($_GET["x"])){
        
        $obj =json_decode($_GET["x"], false);
        
        $name=substr($obj->table,0,-9);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("SELECT * FROM user WHERE name = ? AND password = ?");
        $stmt->bind_param("ss", $name,$obj->password);
        $stmt->execute();
        $result = $stmt->get_result();
       
        $stmt->close();
        $db->close();
        
        if($result->num_rows>0){
            $db = new mysqli("localhost", "root", "root", "test", 3306);
            
            $request="INSERT INTO ".$obj->table." (x,datetime) VALUES (?,?)";
            //$stmt = $db->prepare("INSERT INTO ? (x,datetime) VALUES (?,?)");
            $now = date("Y-m-d H:i:s");
            $stmt = $db->prepare($request);
            $stmt->bind_param("ds",$obj->x,$now);
            $stmt->execute();
            
            $stmt->close();
            $db->close();
            
            echo $now;
        }
  
    }
/////////////////////////ADD_POST_X////////////////////////////////////////////

    if(isset($_POST["x"])){
        
        $obj =json_decode($_POST["x"], false);
        
        $name=substr($obj->table,0,-9);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("SELECT * FROM user WHERE name = ? AND password = ?");
        $stmt->bind_param("ss", $name,$obj->password);
        $stmt->execute();
        $result = $stmt->get_result();
        
        $stmt->close();
        $db->close();
        
        if($result->num_rows>0){
            $db = new mysqli("localhost", "root", "root", "test", 3306);
            
            $request="INSERT INTO ".$obj->table." (x,datetime) VALUES (?,?)";
            //$stmt = $db->prepare("INSERT INTO ? (x,datetime) VALUES (?,?)");
            $now = date("Y-m-d H:i:s");
            $stmt = $db->prepare($request);
            $stmt->bind_param("ds",$obj->x,$now);
            $stmt->execute();
            
            $stmt->close();
            $db->close();
            
            echo $now;
        }
        
        //print_r($_POST);
    }
    
//     if ($_SERVER["REQUEST_METHOD"] == "POST") {
//         // Выводим содержимое массива $_POST
//         print_r($_POST);
//     } else {
//         echo "This script only handles POST requests.";
//     }
    
    //print_r($_POST);
    
/////////////////////////SHOW_TABLES/////////////////////////////////////

    if(isset($_GET["tables"])){
        //$obj =json_decode($_GET["tables"], false);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("SELECT pub_table,code FROM user WHERE pub_table <> ?");
        $none="none";
        $stmt->bind_param("s", $none);
        $stmt->execute();
        $result = $stmt->get_result();
        $arr=[];
        while($row=$result->fetch_assoc()){
            if($row["code"]!="none"){
                $row["code"]=0;
            }
            $arr[]=$row;
        }
        
//         for($i=0;$i<count($arr);$i++){
//             if($arr[$i]["code"]!="none"){
//                 $arr[$i]["code"]=0;
//             }
//         }
        
        $stmt->close();
        $db->close();
        
        echo json_encode($arr);
    }
    
//!//////////////////////GET_ALL_DATA////////////////////////////////////
    if(isset($_GET["getAll"])){
        
        $db = new mysqli("localhost", "root", "root", "test", 3306);
        
        $request="SELECT * FROM ".$_GET["getAll"];
        $stmt = $db->prepare($request);
        $stmt->execute();
        $result = $stmt->get_result();
        $arr=[];
        while($row=$result->fetch_assoc()){
            $arr[]=$row;
        }
        
        $stmt->close();
        $db->close();
        
        echo json_encode($arr);
    }
    
//!//////////////////////GET_DATA////////////////////////////////////
    if(isset($_GET["get"])){
        $obj =json_decode($_GET["get"], false);
        
        $db = new mysqli("localhost", "root", "root", "test", 3306);
        
        $request="SELECT * FROM ".$obj->table." WHERE id>?";
        $stmt = $db->prepare($request);
        $stmt->bind_param("i",$obj->id);
        $stmt->execute();
        $result = $stmt->get_result();
        $arr=[];
        while($row=$result->fetch_assoc()){
            $arr[]=$row;
        }
        
        $stmt->close();
        $db->close();
        
        echo json_encode($arr);
    }
    
//!////////////////////SHOW_DATA/////////////////////////////////////

//     if(isset($_GET["data"])){
        
//         $db = new mysqli("localhost", "root", "root", "test", 3306);
        
//         $request="SELECT * FROM ".$_GET["data"];
//         $stmt = $db->prepare($request);
//         $stmt->execute();
//         $result = $stmt->get_result();
//         $arr=[];
//         while($row=$result->fetch_assoc()){
//             $row["datetime"]=strtotime($row["datetime"]);
//             $arr[]=$row;
//         }
        
//         $stmt->close();
//         $db->close();
        
//         echo json_encode($arr);
//     }
    
/////////////////////////////GET_ACCESSORIES///////////////////////

    
//     if(isset($_GET["accessories"])){
        
//         $db = new mysqli("localhost", "root", "root", "users", 3306);
        
//         $stmt = $db->prepare("SELECT min,max,units FROM user WHERE name=?");
//         $stmt->bind_param("s", $_GET["accessories"]);
//         $stmt->execute();
//         $result = $stmt->get_result();
//         $row=$result->fetch_assoc();
        
//         $stmt->close();
//         $db->close();
        
//         echo json_encode($row);
//     }
    
    
    
    
//////////////////////////////GET_COMPLEX///////////////////////////////

    
    if(isset($_POST["complex"])){
        
        
        $obj =json_decode($_POST["complex"], false);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        
        $stmt = $db->prepare("SELECT min,max,units,code FROM user WHERE name=?;");
        $stmt->bind_param("s", $obj->name);
        $stmt->execute();
        $result = $stmt->get_result();
        $accessories=$result->fetch_assoc();
        
        $stmt->close();
        $db->close();
        
        if($accessories["code"]=="none"){
            $db = new mysqli("localhost", "root", "root", "test", 3306);
            
            $request="SELECT * FROM ".$obj->data;
            $stmt = $db->prepare($request);
            $stmt->execute();
            $result = $stmt->get_result();
            $arr=[];
            while($row=$result->fetch_assoc()){
                $row["datetime"]=strtotime($row["datetime"]);
                $arr[]=$row;
            }
            
            $stmt->close();
            $db->close();
            
            echo json_encode(["accessories"=>$accessories,"data"=>$arr]);
        }else{
            //echo $_POST["complex"];
            
            if($accessories["code"]==$obj->code){
                $db = new mysqli("localhost", "root", "root", "test", 3306);
                
                $request="SELECT * FROM ".$obj->data;
                $stmt = $db->prepare($request);
                $stmt->execute();
                $result = $stmt->get_result();
                $arr=[];
                while($row=$result->fetch_assoc()){
                    $row["datetime"]=strtotime($row["datetime"]);
                    $arr[]=$row;
                }
                
                $stmt->close();
                $db->close();
                
                echo json_encode(["accessories"=>$accessories,"data"=>$arr]);
            }else{
                echo json_encode(["accessories"=>0,"data"=>0]);
            }
        }
       
    }
    
   
    
       
//////////////////////////////REGISTRATION/////////////////////    
    
    if(isset($_POST["form"])){
        $obj =json_decode($_POST["form"], false);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("SELECT * FROM user WHERE name = ?");
        $stmt->bind_param("s", $obj->name);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $db->close();
        if($result->num_rows>0){
            echo "error";
        }else{
            $db = new mysqli("localhost", "root", "root", "users", 3306);
            $stmt = $db->prepare("INSERT INTO user (name,email,password,pub_table,min,max,units,code) VALUES (?,?,?,?,?,?,?,?)");
            $now = date("Y-m-d H:i:s");
            $none="none";
            $range=0;
            $stmt->bind_param("ssssddss", $obj->name,$obj->email,$obj->password,$none,$range,$range,$none,$none);
            $stmt->execute();
            $stmt->close();
            $db->close();
            echo $obj->name;
        }
    }
    
    
    
    
//////////////////////////AUTORISATION/////////////////////////////////////    
    
    if(isset($_POST["a_form"])){
        $obj =json_decode($_POST["a_form"], false);
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("SELECT * FROM user WHERE name = ? AND password = ?");
        $stmt->bind_param("ss", $obj->name,$obj->password);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $db->close();
        if($result->num_rows>0){
            echo $obj->name;
        }else{
             echo "error";
        }
    }
    
    
    
/////////////////////CODE_GENERATOR///////////////////////////
    //97-122
    //65-90
    //48-57
    
    function codeGenerator(){
        $res="";
        $i=0;
        while($i<12){
            $num=rand(1,62);
            if($num>0&&$num<27){
                $res=$res.chr(rand(97,122));
            }else if($num>26&&$num<53){
                $res=$res.chr(rand(65,90));
            }else{
                $res=$res.chr(rand(48,57));
            }
            $i++;
        }
        return $res;
    }
    
    
/////////////////////////////PUBLISH//////////////////////////////////////////////

    if(isset($_POST["publish"])){
        $obj =json_decode($_POST["publish"], false);
        
        $name=$obj->name."_".date("Ymd");
        $id="id";
        $datetime="datetime";
        $x="x";
        
        
        
        $db = new mysqli("localhost", "root", "root", "users", 3306);
        
        $stmt = $db->prepare("SELECT pub_table FROM user WHERE name = ?;");
        $stmt->bind_param("s", $obj->name);
        $stmt->execute();
        $result = $stmt->get_result();
        $row=$result->fetch_assoc();
        $drop_table=$row["pub_table"];
        
        $code="none";
        
        if($obj->access==true){
            $code=codeGenerator();
        }
        
        //$db = new mysqli("localhost", "root", "root", "users", 3306);
        $stmt = $db->prepare("UPDATE user SET pub_table=?,min=?,max=?,units=?,code=? WHERE name=?;");
        $stmt->bind_param("sddsss",$name,$obj->min,$obj->max, $obj->units,$code,$obj->name);
        $stmt->execute();
      
        $stmt->close();
        $db->close();
        
        
        
        
        $db = new mysqli("localhost", "root", "root", "test", 3306);
        
         if($drop_table!="none"){
            $request="DROP TABLE ".$drop_table;
            $stmt = $db->prepare($request);
            //$stmt->bind_param("s",);
            $stmt->execute();
         }
        
        $request="CREATE TABLE ".$name." (id INT PRIMARY KEY AUTO_INCREMENT, datetime VARCHAR(20), x DOUBLE);";
        $stmt = $db->prepare($request);
        
        $stmt->execute();
        
        $stmt->close();
        $db->close();
        
        echo json_encode(["name"=>$name,"code"=>$code]);
        //echo $request;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
?>