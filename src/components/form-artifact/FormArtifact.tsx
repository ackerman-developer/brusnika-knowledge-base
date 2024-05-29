import Latex from 'react-latex-next';

const FormArtifact = () => {
  const formula = `$$\\frac{d}{dx}\\int_{a}^{x}f(t)dt = f(x)$$`

  return(
    <>
      <Latex>{formula}</Latex>
    </>
  )
}

export default FormArtifact
