# coding=utf-8
# Copyright 2022 The TensorFlow datasets Authors and the HuggingFace datasets, DataLab Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Lint as: python3
"""SQUAD: The Stanford Question Answering Dataset."""


import json
import datalabs
from datalabs import get_task, TaskType

logger = datalabs.logging.get_logger(__name__)


_CITATION = """\
@article{liu2021challenges,
  title={Challenges in generalization in open domain question answering},
  author={Liu, Linqing and Lewis, Patrick and Riedel, Sebastian and Stenetorp, Pontus},
  journal={arXiv preprint arXiv:2109.01156},
  year={2021}
}
"""

_DESCRIPTION = """\
Drawing upon studies on systematic generalization, we introduce and annotate \
questions according to three categories that measure different \
levels and kinds of generalization: \
training set overlap, compositional generalization (comp-gen), \
and novel-entity generalization (novel-entity).
"""


TEST_URL = 'https://raw.githubusercontent.com/likicode/QA-generalize/master/annotations/qa_data_with_annotations/webq_test.json'

class WebQConfig(datalabs.BuilderConfig):
    """BuilderConfig for SQUAD."""

    def __init__(self, **kwargs):
        """BuilderConfig for Natural Questions test set annotations.

        Args:
          **kwargs: keyword arguments forwarded to super.
        """
        super(WebQConfig, self).__init__(**kwargs)


class WebQ(datalabs.GeneratorBasedBuilder):
    """Natural Questions dataset with compositional generalization annotations."""

    # BUILDER_CONFIGS = [
    #     WebQConfig(
    #         name="overlap",
    #         description="overlapped with questions in the training set.",
    #     ),
    #     WebQConfig(
    #         name="comp_gen",
    #         description="novel compositions of previously observed entities and structures.",
    #         ),
    #     WebQConfig(
    #         name="novel_entity",
    #         description="consists of entities not present in the training set.",
    #         )
    # ]

    def _info(self):
        return datalabs.DatasetInfo(
            description=_DESCRIPTION,
            features=datalabs.Features(
                {
                    "id": datalabs.Value("string"),
                    "question": datalabs.Value("string"),
                    "answers": datalabs.features.Sequence(datalabs.Value("string")),
                    "question_types": datalabs.features.Sequence(datalabs.Value("string"))
                }
            ),
            # No default supervised_keys (as we have to pass both question
            # and context as input).
            supervised_keys=None,
            homepage="https://github.com/likicode/QA-generalize/",
            citation=_CITATION,
            task_templates=[
                get_task(TaskType.qa_open_domain)(
                    question_column="question",
                    answers_column="answers"
                )
            ],
        )


    def _split_generators(self, dl_manager):

        test_path = dl_manager.download_and_extract(TEST_URL)

        return [datalabs.SplitGenerator(
                name=datalabs.Split.TEST,
                gen_kwargs={"filepath": test_path})]
        


    def _generate_examples(self, filepath):
        """This function returns the examples in the json form."""
        print("generating examples from = %s", filepath)
        key = 0
        with open(filepath, 'rb') as f:
            webq = json.load(f)

        # if self.config.name == 'overlap':
        #     selected_groups = [item for item in webq if item['labels'] == ['overlap']]
        # elif self.config.name == 'comp_gen':
        #     selected_groups = [item for item in webq if item['labels'] == ['comp_gen']]
        # elif self.config.name == 'novel_entity':
        #     selected_groups = [item for item in webq if item['labels'] == ['novel_entity']]

        selected_groups = webq
        for line in selected_groups:
            yield key, {
                'id': line['id'],
                'question': line['question'],
                'answers': line['answers'],
                'question_types': line["labels"]
            }
            key += 1
