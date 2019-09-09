/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {AccordionLocaleT} from '../accordion/locale.js';
import {BreadcrumbLocaleT} from '../breadcrumbs/locale.js';
import {DatepickerLocaleT} from '../datepicker/locale.js';
import {ButtonGroupLocaleT} from '../button-group/locale.js';
import {FileUploaderLocaleT} from '../file-uploader/locale.js';
import {MenuLocaleT} from '../menu/locale.js';
import {ModalLocaleT} from '../modal/locale.js';
import {DrawerLocaleT} from '../drawer/locale.js';
import {PaginationLocaleT} from '../pagination/locale.js';
import {SelectLocaleT} from '../select/locale.js';
import {ToastLocaleT} from '../toast/locale.js';

export type LocaleT = {
  accordion: AccordionLocaleT;
  breadcrumbs: BreadcrumbLocaleT;
  datepicker: DatepickerLocaleT;
  buttongroup: ButtonGroupLocaleT;
  fileuploader: FileUploaderLocaleT;
  menu: MenuLocaleT;
  modal: ModalLocaleT;
  drawer: DrawerLocaleT;
  pagination: PaginationLocaleT;
  select: SelectLocaleT;
  toast: ToastLocaleT;
};
