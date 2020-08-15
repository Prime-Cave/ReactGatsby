import React from 'react'
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}))

export const SoftSkills = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Chip label="Good communication" />
      <Chip label="Team Player" />
      <Chip label="problem solving" />
      <Chip label="Creative" />
      <Chip label="Active listener" />
      <Chip label="Great Organization skills" />
    </div>
  )
}

export const Language = () => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <Chip label="JavaScript" color="primary"/>
        <Chip label="Python" component="a" href="#" color="primary" clickable />
        <Chip label="CSS3" component="a" href="#" color="primary" clickable />
        <Chip label="HTML5" component="a" href="#" color="primary" clickable />
        <Chip label="MySQL" component="a" href="#" color="primary" clickable />
        <Chip label="JSON" component="a" href="#/" color="primary" clickable />
        <Chip label="GrapQL" component="a" href="#" color="primary" clickable />
      </div>
    )
}

export const Frameworks = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Chip
        label="React.js"
        component="a"
        href="https://reactjs.org/"
        color="secondary"
        clickable
      />
      <Chip
        label="Gatsby.js"
        component="a"
        href="https://www.gatsbyjs.org/"
        color="secondary"
        clickable
      />
      <Chip
        label="Bootstrap"
        component="a"
        href="#"
        color="secondary"
        clickable
      />
      <Chip
        label="Node.js"
        component="a"
        href="#"
        color="secondary"
        clickable
      />
      <Chip
        label="Express"
        component="a"
        href="#"
        color="secondary"
        clickable
      />
      <Chip
        label="Material-Ui"
        component="a"
        href="#"
        color="secondary"
        clickable
      />
    </div>
  )
}

export const Tools = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Chip
        label="Git"
        component="a"
        href="#"
        color="primary"
        clickable
      />
      <Chip
        label="Google Cloud Platform"
        component="a"
        href="#"
        color="primary"
        clickable
      />
      <Chip
        label="Postman"
        component="a"
        href="#"
        color="primary"
        clickable
      />
      <Chip
        label="Firebase"
        component="a"
        href="https://reactjs.org/"
        color="primary"
        clickable
      />
    </div>
  )
}

