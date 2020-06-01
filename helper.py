from fastai.vision import load_learner, open_image


learner = load_learner(".")


def predict(file_name):
    image = open_image(file_name)
    return learner.predict(image)
