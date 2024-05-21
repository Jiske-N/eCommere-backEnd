const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tags found." });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// find a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id." });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    if (!tagData) {
      res.status(404).json({ message: "Problem creating tag." });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!tagData) {
      res.status(404).json({ message: "Problem updating tag." });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
