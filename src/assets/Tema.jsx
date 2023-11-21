import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react"


const colors= {
  light:{
    celestito:'#99bbd9',
    azul:'#11539a',
    blueDark:'#153d67',
    blueGrey:'#6494c2',

    },
  celestito:'#99bbd9',
  success:{
    ok:'#989898',
}
}

const Button={
  baseStyle:{
    fontWight:'light',
    borderRadius:'30px',
    _hover:{
      boxShadow:'5px 5px 15px 5px rgba(255,255,255,0.8)'
    }
  },
  size:{
    lg:{
      fontWight:'bold'
    }
  },
  variants:{
    outline:{
      bg:"#94F7B2",
      _hover:{
        bg:'#045402',
        borderColor:'light.blueDark',
        color:'#fff'
      }
    },
    'rojo':{
      bg:"#F39090",
      _hover:{
        bg:'#5E0901',
        borderColor:'light.blueDark',
        color:'#fff'
      }
    },
    'cta':{
      textTransform:'uppercase',
      bg:'success.ok',
      borderRadius:'25px',
      m:'0 10px'
    }
  }

}



export const Tema=extendTheme({colors, components:{Button}})

