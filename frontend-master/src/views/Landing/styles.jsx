export default theme => ({
    root: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1
    },
    section:{
      [theme.breakpoints.up('lg')]: {
        // display:"none"
        height:"100vh",
      },
    },
    subsection:{
      // background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      marginVertical: theme.spacing.unit * 4,
      padding: theme.spacing.unit * 7
    },
    subsectionImage:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      marginVertical: theme.spacing.unit * 4,
      padding: theme.spacing.unit * 3,
    },

    subsectionImageXS:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      marginVertical: theme.spacing.unit * 4,
      padding: theme.spacing.unit * 3,
      [theme.breakpoints.up('lg')]: {
        display:"none"
      },
    },
    subsectionImageMD:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      marginVertical: theme.spacing.unit * 4,
      padding: theme.spacing.unit * 3,
      display:"none",
      [theme.breakpoints.up('lg')]: {
        display:"block"
      },
    },
    sectionHeading:{
      // color: theme.palette.text.primary,
      color: "#545454",
      // fontFamily: 'Montserrat',
      fontFamily: 'Montserrat, sans serif',
      fontSize: '37px',
      letterSpacing: '0px',
      lineHeight: '37px',
      fontWeight: '500',
      marginBottom: theme.spacing.unit * 5,
      textAlign: "center"
      // letterSpacing: -0.3
  },
    // gradient:{
    //   background: "linear-gradient(45deg, #5deaff 50%, #305bad 100%)",
    // },
    banner:{
      // height:"100vh",
      [theme.breakpoints.up('lg')]: {
        height:"100vh",
        backgroundColor:"#f8fafc",
          // marginTop: theme.spacing.unit * 20
          backgroundImage: 'url(/images/bg.svg)',
          backgroundSize: "contain",
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        },

        marginBottom: theme.spacing.unit * 4,
    },
    mainBanner:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems:"center",
      marginTop: theme.spacing.unit * 10,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 20
      },
      padding: theme.spacing.unit * 2
    },
    bannerButton:{
      color:"white",
      background: "#0094ff",
      fontFamily: 'Lato',
      margin:theme.spacing.unit * 1.5,
    },
    buttonGroup:{
      display:"flex",
      flexDirection:"row",
      marginTop:theme.spacing.unit * 4,
      // justifyContent:"flex"
    },
    bannertext:{
        marginLeft: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 25,
    },
    bannerHeading:{
        color: "#545454",
        fontFamily: 'Montserrat, sans serif',
        fontSize: '44px',
        letterSpacing: '0px',
        lineHeight: 1.2,
        fontWeight: '600',
        marginBottom: theme.spacing.unit * 3,
        textAlign: "center",
        // letterSpacing: -0.3
    },
    regularText:{
        color: theme.palette.text.primary,
        opacity:0.6,
        fontFamily: 'Open Sans',
        fontSize: '22px',
        letterSpacing: '-0.05px',
        lineHeight: '25px',
        fontWeight: '400',
        textAlign:"center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
      height: '100%'
    },
    quoteWrapper: {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    quote: {
      backgroundColor: theme.palette.common.neutral,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/images/sign_up_1.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    quoteInner: {
      textAlign: 'center',
      flexBasis: '600px'
    },
    quoteText: {
      color: theme.palette.common.white,
      fontWeight: 300
    },
    name: {
      marginTop: theme.spacing.unit * 3,
      color: theme.palette.common.white
    },
    bio: {
      color: theme.palette.common.white
    },
    contentWrapper: {},
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 2,
      paddingBototm: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    backButton: {},
    logoImage: {
      marginLeft: theme.spacing.unit * 4
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
    },
    form: {
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingBottom: '25px',
      flexBasis: '700px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2
      }
    },
    title: {
      marginTop: theme.spacing.unit * 3
    },
    subtitle: {
      color: theme.palette.text.secondary,
      marginTop: theme.spacing.unit * 0.5
    },
    facebookButton: {
      marginTop: theme.spacing.unit * 3,
      width: '100%'
    },
    facebookIcon: {
      marginRight: theme.spacing.unit
    },
    googleButton: {
      marginTop: theme.spacing.unit * 2,
      width: '100%'
    },
    googleIcon: {
      marginRight: theme.spacing.unit
    },
    sugestion: {
      color: theme.palette.text.secondary,
      marginTop: theme.spacing.unit * 2,
      textAlign: 'center'
    },
    fields: {
      marginTop: theme.spacing.unit * 2
    },
    textField: {
      width: '100%',
      '& + & ': {
        marginTop: theme.spacing.unit * 2
      }
    },
    policy: {
      display: 'flex',
      alignItems: 'center'
    },
    policyCheckbox: {
      marginLeft: '-14px'
    },
    policyText: {
      display: 'inline',
      color: theme.palette.text.secondary
    },
    policyUrl: {
      color: theme.palette.text.primary,
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.main
      }
    },
    progress: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    signInButton: {
      marginTop: theme.spacing.unit * 2,
      width: '100%'
    },
    signUp: {
      marginTop: theme.spacing.unit * 2,
      color: theme.palette.text.secondary
    },
    signUpUrl: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    fieldError: {
      color: theme.palette.danger.main,
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit
    },
    submitError: {
      color: theme.palette.danger.main,
      alignText: 'center',
      marginBottom: theme.spacing.unit,
      marginTop: theme.spacing.unit * 2
    }
  });
  